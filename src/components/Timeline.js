import { Div, when, list, after, resolve, state } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

const DOT_CENTER_OFFSET_PX = 10;

function getWeights(items) {
  const list = items ?? [];
  return list.map((item) => {
    if (item == null) return 1;
    const w = Number(item.weight);
    return Number.isFinite(w) && w >= 0 ? w : 1;
  });
}

function getWeightContext(items) {
  const n = (items ?? []).length;
  if (n < 2) return { totalWeight: 0, cumulativeWeights: [0] };
  const weights = getWeights(items);
  const segmentWeights = weights.slice(0, n - 1);
  const totalWeight = segmentWeights.reduce((s, w) => s + w, 0);
  const cumulativeWeights = [0];
  for (let i = 0; i < segmentWeights.length; i++) {
    cumulativeWeights.push(cumulativeWeights[i] + segmentWeights[i]);
  }
  return { totalWeight, cumulativeWeights };
}

function progressToActiveStepWeighted(progressPct, cumulativeWeights, totalWeight, n) {
  if (n < 1 || totalWeight <= 0) return 0;
  const pct = Math.max(0, Math.min(100, progressPct));
  for (let k = n - 1; k >= 0; k--) {
    const threshold = (cumulativeWeights[k] / totalWeight) * 100;
    if (pct >= threshold) return k;
  }
  return 0;
}

function computeActiveStepAndFill(mode, active, progress, elapsedMs, stepDurationsMs, totalDurationMs, items) {
  const m = mode;
  const n = (items ?? []).length;
  if (n === 0) return { activeStep: 0, progressPct: 0 };

  if (m === 'step') {
    const step = Math.max(0, Math.min(n - 1, Math.floor(active ?? 0)));
    return { activeStep: step, progressPct: 0 };
  }

  if (m === 'percent') {
    const pct = Math.max(0, Math.min(100, Number(progress) || 0));
    const ctx = getWeightContext(items);
    const step = progressToActiveStepWeighted(pct, ctx.cumulativeWeights, ctx.totalWeight, n);
    return { activeStep: step, progressPct: pct };
  }

  if (m === 'time') {
    const elapsed = Number(elapsedMs) || 0;
    const durations = stepDurationsMs;
    const total = totalDurationMs;
    let totalDuration = 0;
    if (Array.isArray(durations) && durations.length >= n) {
      totalDuration = durations.slice(0, n).reduce((s, d) => s + (Number(d) || 0), 0);
    } else if (typeof total === 'number' && total > 0) {
      totalDuration = total;
    }
    if (totalDuration <= 0) return { activeStep: 0, progressPct: 0 };
    const segment = totalDuration / n;
    let step = 0;
    if (Array.isArray(durations) && durations.length >= n) {
      let cumulative = 0;
      for (let i = 0; i < n; i++) {
        cumulative += Number(durations[i]) || 0;
        if (elapsed < cumulative) {
          step = i;
          break;
        }
        step = i;
      }
    } else {
      step = Math.min(n - 1, Math.floor(elapsed / segment));
    }
    const progressPct = Math.min(100, (elapsed / totalDuration) * 100);
    const ctx = getWeightContext(items);
    const stepWeighted = progressToActiveStepWeighted(progressPct, ctx.cumulativeWeights, ctx.totalWeight, n);
    return { activeStep: stepWeighted, progressPct };
  }

  return { activeStep: 0, progressPct: 0 };
}

function computeSegmentFillPercent(mode, activeStep, progressPct, segmentIndex, n, weightContext) {
  if (n < 2 || segmentIndex < 0 || segmentIndex >= n - 1) return 0;
  if (mode === 'step') {
    return activeStep > segmentIndex ? 100 : 0;
  }
  const { totalWeight, cumulativeWeights } = weightContext ?? getWeightContext([]);
  if (totalWeight <= 0) return 0;
  const segmentStart = (cumulativeWeights[segmentIndex] / totalWeight) * 100;
  const segmentEnd = (cumulativeWeights[segmentIndex + 1] / totalWeight) * 100;
  if (progressPct <= segmentStart) return 0;
  if (progressPct >= segmentEnd) return 100;
  const range = segmentEnd - segmentStart;
  return range <= 0 ? 0 : ((progressPct - segmentStart) / range) * 100;
}

let timelineIdCounter = 0;

function measureSegmentLayout(timelineId) {
  const el = document.getElementById(timelineId);
  if (!el) return;
  const itemEls = el.querySelectorAll('.g-ui-timeline-item');
  if (itemEls.length < 2) return [];
  const segments = [];
  for (let i = 0; i < itemEls.length - 1; i++) {
    const top = itemEls[i].offsetTop + DOT_CENTER_OFFSET_PX;
    const height = itemEls[i + 1].offsetTop - itemEls[i].offsetTop;
    segments.push({ top, height });
  }
  return segments;
}

export function Timeline(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    items: [],
    mode: 'step',
    active: 0,
    progress: 0,
    elapsedMs: 0,
    stepDurationsMs: null,
    totalDurationMs: null,
    clickable: false,
  });
  const {
    items,
    mode,
    active,
    progress,
    elapsedMs,
    stepDurationsMs,
    totalDurationMs,
    clickable,
    className,
    ...rest
  } = props;
  const { onChange } = rawProps;

  const timelineId = `g-ui-timeline-${++timelineIdCounter}`;
  const segmentLayout = state([]);

  const state_ = after(mode, active, progress, elapsedMs, stepDurationsMs, totalDurationMs, items).compute(
    (values) => {
      const [mode, active, progress, elapsedMs, stepDurationsMs, totalDurationMs, items] = values;
      return computeActiveStepAndFill(
        mode,
        active,
        progress,
        elapsedMs,
        stepDurationsMs,
        totalDurationMs,
        items
      );
    }
  );

  const showTrack = after(mode).compute((m) => {
    const v = resolve(m);
    return v === 'time' || v === 'percent' || v === 'step';
  });

  const resolvedMode = after(mode).compute((m) => resolve(m));

  function scheduleMeasure() {
    setTimeout(() => {
      const segments = measureSegmentLayout(timelineId);
      if (segments.length) segmentLayout.set(segments);
    }, 0);
  }

  after(items).change(() => scheduleMeasure());
  scheduleMeasure();

  return Div(
    {
      ...rest,
      id: timelineId,
      className: cx(
        'g-ui-timeline',
        after(mode).compute((m) => (m ? `g-ui-timeline-mode-${resolve(m)}` : '')),
        after(showTrack).compute((show) => (show ? 'g-ui-timeline-has-track' : '')),
        after(clickable).compute((c) => (resolve(c) ? 'g-ui-timeline-clickable' : '')),
        className
      ),
    },
    when(showTrack, () =>
      list(segmentLayout, (seg, idx) => {
        const segStyle = after(seg).compute((s) =>
          s ? { top: `${s.top}px`, height: `${s.height}px` } : {}
        );
        const fillPct = after(state_, idx, items, resolvedMode).compute(([s, i, its, m]) => {
          const itsList = its ?? [];
          const n = itsList.length;
          const weightContext = getWeightContext(itsList);
          return computeSegmentFillPercent(
            m,
            s?.activeStep ?? 0,
            s?.progressPct ?? 0,
            resolve(i) ?? 0,
            n,
            weightContext
          );
        });
        const fillHeight = after(fillPct).compute((p) => `${Math.max(0, Math.min(100, p))}%`);
        return Div(
          {
            className: 'g-ui-timeline-track-segment',
            style: after(segStyle).compute((x) => x),
          },
          Div({
            className: 'g-ui-timeline-track-fill',
            style: after(fillHeight).compute((h) => (h ? { height: h } : { height: '0%' })),
          })
        );
      })
    ),
    list(items, (item, idx) => {
      const itemState = after(state_, idx).compute(([s, i]) => {
        const step = s?.activeStep ?? 0;
        const index = resolve(i) ?? 0;
        if (index < step) return 'completed';
        if (index === step) return 'active';
        return 'future';
      });
      const itemClass = after(itemState).compute((st) => (st ? `g-ui-timeline-item-${st}` : ''));
      const handleClick =
        resolve(clickable) && typeof onChange === 'function'
          ? () => {
              const i = resolve(idx);
              if (typeof i === 'number') onChange(i);
            }
          : undefined;
      return Div(
        {
          className: cx('g-ui-timeline-item', itemClass),
          onClick: handleClick,
          role: handleClick ? 'button' : undefined,
          tabIndex: handleClick ? 0 : undefined,
        },
        Div({ className: 'g-ui-timeline-dot' }),
        Div(
          { className: 'g-ui-timeline-content' },
          when(item.title, () => Div({ className: 'g-ui-timeline-title' }, item.title)),
          when(item.description, () =>
            Div({ className: 'g-ui-timeline-desc' }, item.description)
          ),
          item.content
        )
      );
    })
  );
}
