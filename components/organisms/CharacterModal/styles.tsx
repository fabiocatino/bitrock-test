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
  position: relative;
  width: 300px;
  height: fit-content;
  max-height: 800px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  #close-modal {
    cursor: pointer;
    font-size: 30px;
    top: -30px;
    right: 0px;
    position: absolute;
    z-index: 200;
    color: black;
  }

  @media screen and (max-width: 780px) {
    min-width: 300px;

    height: fit-content;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;
CardContainer.displayName = "CardContainer";

export const ImageContainer = styled.div`
  height: 200px;
  position: relative;
  img {
    border-radius: 12px;
  }
  margin-bottom: 0.5rem;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
ImageContainer.displayName = "ImageContainer";

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;
  h3 {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 780px) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 576px) {
    max-height: 200px;
  }
`;
EpisodesContainer.displayName = "EpisodesContainer";
