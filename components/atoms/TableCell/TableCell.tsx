import React from "react";
import { Container } from "./styles";

type TableCellProps = {
  children: JSX.Element | string;
};

const TableCell = ({ children }: TableCellProps) => {
  return <Container>{children}</Container>;
};

export default TableCell;
