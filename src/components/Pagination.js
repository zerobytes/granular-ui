import { Button, Div, Span, state, signal, setSignal, after, list } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';
import { Icon } from './Icon.js';
import {
  keyboardArrowLeftSvg,
  keyboardArrowRightSvg,
  chevronLeftSvg,
  chevronRightSvg,
} from '../theme/icons.js';

const ELLIPSIS_LEFT = { type: 'ellipsis', id: 'left' };
const ELLIPSIS_RIGHT = { type: 'ellipsis', id: 'right' };

function getVisiblePages(current, total, siblingCount) {
  const totalPages = Math.max(1, Math.floor(total));
  if (totalPages <= siblingCount * 2 + 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const leftSibling = Math.max(1, current - siblingCount);
  const rightSibling = Math.min(totalPages, current + siblingCount);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;
  const pages = [];
  if (showLeftEllipsis) {
    pages.push(1, ELLIPSIS_LEFT);
  } else if (leftSibling > 1) {
    for (let i = 1; i < leftSibling; i += 1) pages.push(i);
  }
  for (let i = leftSibling; i <= rightSibling; i += 1) pages.push(i);
  if (showRightEllipsis) {
    pages.push(ELLIPSIS_RIGHT, totalPages);
  } else if (rightSibling < totalPages) {
    for (let i = rightSibling + 1; i <= totalPages; i += 1) pages.push(i);
  }
  return pages;
}

export function Pagination(...args) {
  const { props, rawProps } = splitPropsChildren(args, { total: 1, size: 'md', siblingCount: 2 });
  const { page, total, size, siblingCount, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(page) ?? 1);

  after(page).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setPage = (next) => {
    const totalValue = Number(resolveValue(total)) || 1;
    const clamped = Math.max(1, Math.min(totalValue, next));
    currentState.set(clamped);
    onChange?.(clamped);
  };
  const updateVisiblePages = () => {
    const c = currentState.get?.() ?? currentState ?? 1;
    const t = Number(resolveValue(total)) || 1;
    const sib = Number(resolveValue(siblingCount)) || 2;
    setSignal(visiblePagesSignal, getVisiblePages(c, t, sib));
  };
  const visiblePagesSignal = signal(
    getVisiblePages(resolveValue(page) ?? 1, Number(resolveValue(total)) || 1, Number(resolveValue(siblingCount)) || 2)
  );
  after(currentState, total, siblingCount).change(updateVisiblePages);
  return Div(
    {
      ...rest,
      className: cx('g-ui-pagination', classVar('g-ui-pagination-size-', size, 'md'), props.className ?? className),
    },
    Button(
      {
        className: 'g-ui-pagination-item',
        'aria-label': 'First page',
        onClick: () => setPage(1),
        disabled: after(currentState).compute((v) => (v?.get?.() ?? v) <= 1),
      },
      Icon({ size: 'sm', innerHTML: keyboardArrowLeftSvg })
    ),
    Button(
      {
        className: 'g-ui-pagination-item',
        'aria-label': 'Previous page',
        onClick: () => setPage((currentState.get?.() ?? currentState) - 1),
        disabled: after(currentState).compute((v) => (v?.get?.() ?? v) <= 1),
      },
      Icon({ size: 'sm', innerHTML: chevronLeftSvg })
    ),
    list(visiblePagesSignal, (item) => {
      const raw = item?.get?.();
      if (raw?.type === 'ellipsis') {
        return Span({ className: 'g-ui-pagination-ellipsis' }, '…');
      }
      const pageNum = raw;
      return Button(
        {
          className: after(currentState).compute((v) => {
            const curr = v?.get?.() ?? v;
            return cx('g-ui-pagination-item', pageNum === curr && 'g-ui-pagination-item-active');
          }),
          onClick: () => setPage(pageNum),
        },
        String(pageNum)
      );
    }),
    Button(
      {
        className: 'g-ui-pagination-item',
        'aria-label': 'Next page',
        onClick: () => setPage((currentState.get?.() ?? currentState) + 1),
        disabled: after(currentState, total).compute((v, t) => {
          const curr = v?.get?.() ?? v;
          const tot = Number(resolveValue(t)) || 1;
          return curr >= tot;
        }),
      },
      Icon({ size: 'sm', innerHTML: chevronRightSvg })
    ),
    Button(
      {
        className: 'g-ui-pagination-item',
        'aria-label': 'Last page',
        onClick: () => setPage(Number(resolveValue(total)) || 1),
        disabled: after(currentState, total).compute((v, t) => {
          const curr = v?.get?.() ?? v;
          const tot = Number(resolveValue(t)) || 1;
          return curr >= tot;
        }),
      },
      Icon({ size: 'sm', innerHTML: keyboardArrowRightSvg })
    )
  );
}
