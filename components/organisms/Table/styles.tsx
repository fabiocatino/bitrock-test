import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 500px;
  justify-content: center;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
Container.displayName = "Container";

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    text-align: left;
    padding: 0.5rem;
    min-width: 400px;
    svg {
      font-size: 30px;
    }

    @media screen and (max-width: 780px) {
      min-width: 100%;
      font-size: 0.8em;

      svg {
        font-size: 20px;
      }
    }
  }
`;
TableContainer.displayName = "TableContainer";

export const Avatar = styled(Image)`
  border-radius: 50px;
`;
Avatar.displayName = "Avatar";

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    filter: brightness(0.5);
  }
`;
NameContainer.displayName = "NameContainer";

export const AddToFavoriteIcon = styled(MdFavoriteBorder)`
  cursor: pointer;
`;
AddToFavoriteIcon.displayName = "AddToFavoriteIcon";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
HeaderContainer.displayName = "HeaderContainer";
