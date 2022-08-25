import SearchBar from "atoms/SearchBar";
import TableCell from "atoms/TableCell";
import TableHeader from "atoms/TableHeader";
import TableRow from "atoms/TableRow";
import { GlobalContext } from "context/GlobalContext";
import Modal from "organisms/CharacterModal";
import { useContext, useState } from "react";
import { MdFavorite } from "react-icons/md";
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
  const [query, setQuery] = useState("");
  const { favorites, setFavorites } = useContext(GlobalContext);

  const handleClick = (char: Character) => {
    setIsOpen(true);
    setCharacter(char);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const addToFavoriteHandler = (char: Character) => {
    setFavorites?.((existingFavorites) => [...existingFavorites, char]);
  };

  const removeFromFavoriteHandler = (char: Character) => {
    setFavorites?.((existingFavorites) =>
      existingFavorites.filter((selected) => selected.id !== char.id)
    );
  };
  return (
    <Container>
      {isOpen && <Modal {...{ close: () => setIsOpen(false), character }} />}
      <SearchBar onChange={handleSearch} />
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Add to favorite</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data
            ?.filter((char) => char.name.toLowerCase().includes(query))
            .map((char: Character, index: number) => (
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
                  {favorites?.find((fav) => fav.id === char.id) ? (
                    <MdFavorite
                      onClick={() => removeFromFavoriteHandler(char)}
                    />
                  ) : (
                    <AddToFavoriteIcon
                      onClick={() => addToFavoriteHandler(char)}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}

export default Table;
