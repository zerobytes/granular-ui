import { Div, Span, after, context } from '@granularjs/core';
import { splitPropsChildren, cx, classFlag } from '../utils.js';

const sizeContext = context([]);
const tableContext = context({ sort: null, onSort: null });

export function GridTable(...args) {
    const { props, rawProps, children } = splitPropsChildren(args, { sizes: [], sort: null, stickyHeader: false });
    const { className, sizes: sizesProp, sort: sortProp, stickyHeader: stickyProp, ...rest } = props;
    const { onSort } = rawProps;

    const sizes = sizeContext.scope(sizesProp.get());
    after(sizesProp).change(v => sizes.set(v));

    const table = tableContext.scope({ sort: sortProp.get(), onSort: onSort || null });
    after(sortProp).change(v => table.set().sort = v);

    return sizes.serve(table.serve(Div({
        className: cx(
            'g-ui-grid-table',
            classFlag('g-ui-grid-table-sticky', stickyProp),
            className
        ),
        style: {
            gridTemplateColumns: after(sizes).compute(s =>
                Array.isArray(s) ? s.join(' ') : ''
            ),
        },
        ...rest,
    }, children)));
}

GridTable.GridRow = (...args) => {
    const { props, children } = splitPropsChildren(args, {});
    const { className, header, ...rest } = props;

    return Div(
        {
            className: cx(
                'g-ui-grid-table-row',
                classFlag('g-ui-grid-table-row-header', header),
                className
            ),
            ...rest,
        },
        ...children
    );
};

GridTable.GridCell = function (...args) {
    const { props, rawProps, children } = splitPropsChildren(args, {});
    const { className, sort: _sort, ...rest } = props;
    const sortKey = rawProps.sort;

    if (sortKey) {
        const table = tableContext.state();

        const direction = after(table.sort).compute(s =>
            s?.key === sortKey ? s.direction : null
        );

        const handleSort = () => {
            const current = table.get().sort;
            let next;
            if (current?.key === sortKey) {
                next = current.direction === 'asc'
                    ? { key: sortKey, direction: 'desc' }
                    : null;
            } else {
                next = { key: sortKey, direction: 'asc' };
            }
            table.set().sort = next;
            const { onSort } = table.get();
            if (onSort) onSort(next);
        };

        return Div(
            {
                className: cx('g-ui-grid-table-cell', 'g-ui-grid-table-cell-sortable', className),
                onClick: handleSort,
                ...rest,
            },
            children,
            Span({ className: 'g-ui-grid-table-sort-icon' },
                after(direction).compute(d =>
                    d === 'asc' ? ' ↑' : d === 'desc' ? ' ↓' : ''
                )
            )
        );
    }

    return Div(
        {
            className: cx('g-ui-grid-table-cell', className),
            ...rest,
        },
        children
    );
};