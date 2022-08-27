type TableCellProps = {
  children: JSX.Element | string;
};

const TableCell = ({ children }: TableCellProps) => {
  return <td>{children}</td>;
};

export default TableCell;
