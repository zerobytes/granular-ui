import { Table as HtmlTable, Thead, Tbody, Tr, Th, Td } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Table(...args) {
  const { props } = splitPropsChildren(args, { headers: [], rows: [] });
  const { headers = [], rows = [], striped, highlightOnHover, className, style, ...rest } = props;
  return HtmlTable(
    {
      ...rest,
      className: cx('g-ui-table', striped && 'g-ui-table-striped', highlightOnHover && 'g-ui-table-hover', className),
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
