import { Table as HtmlTable, Thead, Tbody, Tr, Th, Td, list, when, after } from '@granularjs/core';
import { cx, splitPropsChildren, classFlag } from '../utils.js';

export function Table(...args) {
  const { props } = splitPropsChildren(args, { headers: [], rows: [] });
  const {
    headers,
    rows,
    striped,
    highlightOnHover,
    withBorder,
    withColumnBorders,
    withRowBorders,
    className,
    style,
    ...rest
  } = props;

  const hasHeaders = after(headers).compute((next) => next.length > 0);
  return HtmlTable(
    {
      ...rest,
      className: cx(
        'g-ui-table',
        classFlag('g-ui-table-striped', striped),
        classFlag('g-ui-table-hover', highlightOnHover),
        classFlag('g-ui-table-with-border', withBorder),
        classFlag('g-ui-table-column-borders', withColumnBorders),
        classFlag('g-ui-table-row-borders', withRowBorders),
        className
      ),
    },
    when(hasHeaders, () => Thead(
      TableRow(headers, true)
    )),
    Tbody(list(rows, (row) => TableRow(row, false)))
  );
}
const TableRow = (row, header) => {
  const isArray = after(row).compute((next) => Array.isArray(next));

  const ObjectRow = (row) => {
    const cells = after(row).compute((next) => Object.values(next));
    return ArrayRow(cells)
  }

  const ArrayRow = (row) => {
    return list(row, (next) => {
      return header ? TableHeaderCell(next) : TableCell(next)
    })
  }

  return Tr(
    when(isArray,
      () => ArrayRow(row),
      () => ObjectRow(row)
    )
  )
}

const TableCell = (content) => {
  return Td(content)
}

const TableHeaderCell = (content) => {
  return Th(content)
}