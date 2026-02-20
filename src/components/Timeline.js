import { Div, when, list, after, resolve, state, Img, Span } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';

const PIN_CENTER_OFFSET = { xs: 6, sm: 8, md: 10, lg: 12, xl: 14 };
const LINE_WIDTH_CSS = { xs: '2px', sm: '3px', md: '4px', lg: '6px', xl: '8px' };
const PIN_HALF_CSS = { xs: '6px', sm: '8px', md: '10px', lg: '12px', xl: '14px' };
const PIN_COLUMN_CENTER_PX = 14;

function resolveActiveColor(color) {
  if (color == null || color === '') return 'var(--g-ui-primary)';
  const s = String(color).trim();
  if (s.startsWith('#')) return s;
  return `var(--g-ui-${s})`;
}

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
  if (!el) return [];
  const itemEls = el.querySelectorAll('.g-ui-timeline-item');
  if (itemEls.length < 2) return [];
  const pinSize = el.dataset.pinSize || 'md';
  const offset = PIN_CENTER_OFFSET[pinSize] ?? PIN_CENTER_OFFSET.md;
  const segments = [];
  for (let i = 0; i < itemEls.length - 1; i++) {
    const top = itemEls[i].offsetTop + offset;
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
    pinRadius: 'md',
    reverseActive: false,
    lineWidth: 'md',
    pinSize: 'md',
    activeColor: 'primary',
    align: 'left',
    pinMode: 'default',
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
    pinRadius,
    reverseActive,
    lineWidth,
    pinSize,
    activeColor,
    align,
    pinMode,
    className,
    ...rest
  } = props;
  const { onChange } = rawProps;

  const activeColorResolved = after(activeColor).compute((c) => resolveActiveColor(resolve(c)));

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
  const reverseTrackLayout = after(segmentLayout, reverseActive).compute(([segs, rev]) => {
    if (!resolve(rev) || !segs?.length) return null;
    const first = segs[0];
    let totalHeight = 0;
    for (const s of segs) totalHeight += s.height;
    return { top: first.top, height: totalHeight };
  });

  const reverseFillHeight = after(state_).compute((s) =>
    s?.progressPct != null ? `${Math.max(0, Math.min(100, s.progressPct))}%` : '0%'
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
  after(pinSize).change(() => scheduleMeasure());
  scheduleMeasure();

  return Div(
    {
      ...rest,
      id: timelineId,
      'data-pin-size': after(pinSize).compute((s) => resolve(s) ?? 'md'),
      'data-active-color': after(activeColor).compute((a) => {
        const v = resolve(a);
        if (v == null || typeof v !== 'string') return 'primary';
        const s = String(v).trim();
        if (s.startsWith('#')) return 'custom';
        return s || 'primary';
      }),
      style: after(activeColor, lineWidth, pinSize).compute(([a, lw, ps]) => {
        const res = {
          '--g-ui-timeline-line-width': LINE_WIDTH_CSS[resolve(lw)] ?? '4px',
          '--g-ui-timeline-track-offset': `calc(${PIN_COLUMN_CENTER_PX}px - var(--g-ui-timeline-line-width) / 2)`,
          '--g-ui-timeline-pin-half': PIN_HALF_CSS[resolve(ps)] ?? '10px',
        };
        const colorVal = resolve(a);
        if (colorVal && String(colorVal).trim().startsWith('#'))
          res['--g-ui-timeline-active-color'] = String(colorVal).trim();
        return res;
      }),
      className: cx(
        'g-ui-timeline',
        after(mode).compute((m) => (m ? `g-ui-timeline-mode-${resolve(m)}` : '')),
        after(showTrack).compute((show) => (show ? 'g-ui-timeline-has-track' : '')),
        after(clickable).compute((c) => (resolve(c) ? 'g-ui-timeline-clickable' : '')),
        after(reverseActive).compute((r) => (resolve(r) ? 'g-ui-timeline-reverse' : '')),
        after(align).compute((a) => (resolve(a) === 'right' ? 'g-ui-timeline-align-right' : '')),
        classVar('g-ui-timeline-pin-radius-', pinRadius, 'md'),
        classVar('g-ui-timeline-line-width-', lineWidth, 'md'),
        classVar('g-ui-timeline-pin-size-', pinSize, 'md'),
        after(pinMode).compute((p) => (p ? `g-ui-timeline-pin-mode-${resolve(p)}` : '')),
        className
      ),
    },
    when(showTrack, () =>
      after(reverseActive).compute((rev) => {
        if (resolve(rev)) {
          return Div(
            {
              className: 'g-ui-timeline-track-segment g-ui-timeline-track-reverse',
              style: after(reverseTrackLayout).compute((l) =>
                l ? { top: `${l.top}px`, height: `${l.height}px` } : {}
              ),
            },
            Div({
              className: 'g-ui-timeline-track-fill',
              style: after(reverseFillHeight).compute((h) => (h ? { height: h } : { height: '0%' })),
            })
          );
        }
        return list(segmentLayout, (seg, idx) => {
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
        });
      })
    ),
    list(items, (item, idx) => {
      const itemState = after(state_, idx, items, reverseActive).compute(([s, i, its, rev]) => {
        const step = s?.activeStep ?? 0;
        const index = resolve(i) ?? 0;
        const n = (its ?? []).length;
        const logicalIndex = resolve(rev) ? n - 1 - index : index;
        if (logicalIndex < step) return 'completed';
        if (logicalIndex === step) return 'active';
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
      const pinModeVal = after(pinMode).compute((p) => resolve(p) ?? 'default');
      const pinExtra = after(pinModeVal, item).compute(([mode, it]) => {
        const m = mode ?? 'default';
        if (m === 'icon' && (it?.icon != null || it?.pinIcon != null))
          return Span(
            { className: 'g-ui-timeline-pin-icon material-symbols-outlined' },
            it.icon ?? it.pinIcon ?? ''
          );
        if (m === 'image' && (it?.image != null || it?.pinImage != null || it?.src != null))
          return Img({
            className: 'g-ui-timeline-pin-image',
            src: it.image ?? it.pinImage ?? it.src,
            alt: it.pinImageAlt ?? '',
          });
        if (m === 'custom' && it?.pinContent != null) return it.pinContent;
        return null;
      });
      const hasPinExtra = after(pinModeVal, item).compute(([mode, it]) => {
        const m = mode ?? 'default';
        if (m === 'icon') return it?.icon != null || it?.pinIcon != null;
        if (m === 'image') return it?.image != null || it?.pinImage != null || it?.src != null;
        if (m === 'custom') return it?.pinContent != null;
        return false;
      });
      const dotBlock = Div(
        { className: 'g-ui-timeline-dot' },
        Div({ className: 'g-ui-timeline-dot-inner' }),
        when(hasPinExtra, () => pinExtra)
      );
      const contentBlock = Div(
        { className: 'g-ui-timeline-content' },
        when(item.title, () => Div({ className: 'g-ui-timeline-title' }, item.title)),
        when(item.description, () =>
          Div({ className: 'g-ui-timeline-desc' }, item.description)
        ),
        item.content
      );
      return Div(
        {
          className: cx('g-ui-timeline-item', itemClass),
          style: after(activeColorResolved).compute((c) =>
            c ? { '--g-ui-timeline-active-color': c } : undefined
          ),
          onClick: handleClick,
          role: handleClick ? 'button' : undefined,
          tabIndex: handleClick ? 0 : undefined,
        },
        Div({ className: 'g-ui-dot-wrapper' },
          dotBlock,
        ),
        contentBlock
      );
    })
  );
}
