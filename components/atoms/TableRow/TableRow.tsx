import React from "react";
import { Container } from "./styles";

type TableRowProps = {
  children: JSX.Element[] | string;
};

const TableRow = ({ children }: TableRowProps) => {
  return <Container>{children}</Container>;
};

export default TableRow;
