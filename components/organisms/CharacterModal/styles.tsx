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
  width: 500px;
  height: 800px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;

  @media screen and (max-width: 780px) {
    min-width: 300px;
    width: 50%;
    height: fit-content;
  }

  @media screen and (max-width: 576px) {
    min-width: 300px;
    width: 50%;
    height: 600px;
  }
`;
CardContainer.displayName = "CardContainer";

export const ImageContainer = styled.div`
  height: 1000px;
  width: 50%;
  position: relative;

  @media screen and (max-width: 780px) {
    width: 100%;
    height: 150px;
  }
`;
ImageContainer.displayName = "ImageContainer";

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;

  @media screen and (max-width: 780px) {
    font-size: 0.8em;
  }
`;
EpisodesContainer.displayName = "EpisodesContainer";

export const Background = styled.img``;
Background.displayName = "Background";
