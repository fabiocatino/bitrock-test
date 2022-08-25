import React from "react";
import { Header } from "./styles";

type TableHeaderProps = {
  children: JSX.Element | string | string[];
};

function TableHeader({ children }: TableHeaderProps) {
  return <Header>{children}</Header>;
}

export default TableHeader;
