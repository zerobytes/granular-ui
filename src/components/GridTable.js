import { Div, after, context } from 'granular';
import { splitPropsChildren, cx, classFlag } from '../utils.js';

const sizeContext = context([]);

export function GridTable(...args) {
    const { props, children } = splitPropsChildren(args, { sizes: [] });
    const { className, sizes: sizesProp, ...rest } = props;

    const sizes = sizeContext.scope(sizesProp.get());
    after(sizesProp).change(v => sizes.set(v));

    return sizes.serve(Div({
        className: cx('g-ui-grid-table', className),
        ...rest,
    }, children));
}

GridTable.GridRow = (...args) => {
    const { props, children } = splitPropsChildren(args, {});
    const { className, header, ...rest } = props;

    const sizes = sizeContext.state();

    return Div(
        {
            className: cx(
                'g-ui-grid-table-row',
                classFlag('g-ui-grid-table-row-header', header),
                className
            ),
            style: {
                gridTemplateColumns: after(sizes).compute(s =>
                    Array.isArray(s) ? s.join(' ') : ''
                ),
            },
            ...rest,
        },
        ...children
    );
};

GridTable.GridCell = function (...args) {
    const { props, children } = splitPropsChildren(args, {});
    const { className, ...rest } = props;

    return Div(
        {
            className: cx('g-ui-grid-table-cell', className),
            ...rest,
        },
        children
    );
};