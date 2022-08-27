import React from "react";

type TableBodyProps = {
  children?: JSX.Element | JSX.Element[] | string | false;
};

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
