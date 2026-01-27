import { Table as HtmlTable, Thead, Tbody, Tr, Th, Td } from 'granular';
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
    className,
    style,
    ...rest
  } = props;
  return HtmlTable(
    {
      ...rest,
      className: cx(
        'g-ui-table',
        classFlag('g-ui-table-striped', striped),
        classFlag('g-ui-table-hover', highlightOnHover),
        classFlag('g-ui-table-with-border', withBorder),
        classFlag('g-ui-table-column-borders', withColumnBorders),
        className
      ),
    },
    headers.length
      ? Thead(Tr(headers.map((header) => Th(header))))
      : null,
    Tbody(
      rows.map((row) =>
        Tr(
          Array.isArray(row)
            ? row.map((cell) => Td(cell))
            : Object.values(row).map((cell) => Td(cell))
        )
      )
    )
  );
}
