import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000000;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
`;
ModalContainer.displayName = "ModalContainer";

export const CardContainer = styled.div`
  width: 800px;
  height: fit-content;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
`;
CardContainer.displayName = "CardContainer";

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;
`;
EpisodesContainer.displayName = "EpisodesContainer";
