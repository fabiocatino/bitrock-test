type TableHeadProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const TableHead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>;
};

export default TableHead;
