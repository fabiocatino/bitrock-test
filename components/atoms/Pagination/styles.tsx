import styled from "styled-components";

export const Button = styled.button<{ active?: boolean }>`
  margin-left: 0.1rem;
  background-color: ${({ active }) => active && "gray"};
  border-radius: 5px;
  padding: 4px 8px;
`;
Button.displayName = "Button";
