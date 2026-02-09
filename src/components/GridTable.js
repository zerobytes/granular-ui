import { Div, computed, state, context } from 'granular';
import { splitPropsChildren, cx, classVar, classFlag } from '../utils.js';
import { Text } from './Text.js';


const sizeContext = context([]);


export function GridTable(...args) {
    const { props, children } = splitPropsChildren(args, {});

    return sizeContext.serve(Div({ className: 'g-ui-grid-table' },
        children
    ));
}


GridTable.GridRow = (...args) => {
    const { props, children } = splitPropsChildren(args, {});
    const { className, header, ...rest } = props;

    // console.log('sizes', sizes.get())

    // console.log('children', children)
    children?.map?.((child) => {
        // sizes.get().push('auto')
        // console.log('child.$size', child.$size)
        // console.log('child', child)
    })

    return Div(
        {
            className: cx(
                'g-ui-grid-table-row',
                classFlag('g-ui-grid-table-row-header', header),
                className
            ),
            ...rest
        },
        ...children
    )
}
GridTable.GridCell = function (...args) {
    const { props, children } = splitPropsChildren(args, {});
    const { className, ...rest } = props;
    const size = state('auto')


    return Div(
        {
            className: cx('g-ui-grid-table-cell', className),
            ...rest
        },
        children
    )
}