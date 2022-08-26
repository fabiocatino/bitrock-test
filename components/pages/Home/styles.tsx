import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
Container.displayName = "Container";

export const Header = styled.h1`
  font-size: 2em;
  align-self: flex-start;

  @media screen and (max-width: 780px) {
    font-size: 1em;
  }
`;
Header.displayName = "Header";
