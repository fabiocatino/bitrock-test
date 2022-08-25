import TableCell from "atoms/TableCell";
import TableHeader from "atoms/TableHeader";
import TableRow from "atoms/TableRow";
import Modal from "organisms/CharacterModal";
import { useState } from "react";
import { Character } from "types/character";
import {
  AddToFavoriteIcon,
  Avatar,
  Container,
  NameContainer,
  TableContainer,
} from "./styles";

type TableProps = {
  data?: Character[];
};

function Table({ data }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [character, setCharacter] = useState<Character>();

  const handleClick = (char: Character) => {
    setIsOpen(true);
    setCharacter(char);
  };
  return (
    <Container>
      {isOpen && <Modal {...{ close: () => setIsOpen(false), character }} />}
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Add to favorite</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data?.map((char: Character) => (
            <TableRow key={char?.id}>
              <TableCell>
                <NameContainer onClick={() => handleClick(char)}>
                  <Avatar
                    width={50}
                    height={50}
                    src={char?.image}
                    alt="image"
                  />
                  {char?.name}
                </NameContainer>
              </TableCell>
              <TableCell>
                <AddToFavoriteIcon />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}

export default Table;
