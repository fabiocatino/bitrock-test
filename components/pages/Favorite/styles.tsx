import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  /* background-image: url("/6798923.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover; */
`;
Container.displayName = "Container";

export const Header = styled.h1`
  font-size: 5em;
  align-self: flex-start;
`;
Header.displayName = "Header";
