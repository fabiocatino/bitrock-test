import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
Container.displayName = "Container";

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    text-align: left;
    padding: 0.5rem;
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
    background-color: gray;
  }
`;
NameContainer.displayName = "NameContainer";

export const AddToFavoriteIcon = styled(MdFavoriteBorder)`
  cursor: pointer;
`;
AddToFavoriteIcon.displayName = "AddToFavoriteIcon";
