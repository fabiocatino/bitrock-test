import React from "react";
import { CustomText } from "./styles";

type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <CustomText>{children}</CustomText>;
};

export default Text;
