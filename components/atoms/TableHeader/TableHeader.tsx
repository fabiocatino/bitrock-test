type TableHeaderProps = {
  children: JSX.Element | string | string[];
};

function TableHeader({ children }: TableHeaderProps) {
  return <th>{children}</th>;
}

export default TableHeader;
