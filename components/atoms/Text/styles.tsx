import styled from "styled-components";

export const CustomText = styled.p`
  font-size: 1em;
  margin: 0.2em;
  @media screen and (max-width: 780px) {
    font-size: 0.8em;
  }
`;
CustomText.displayName = "CustomText";
