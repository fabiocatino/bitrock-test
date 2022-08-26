import SearchBar from "atoms/SearchBar";
import TableCell from "atoms/TableCell";
import TableHeader from "atoms/TableHeader";
import TableRow from "atoms/TableRow";
import useLocalStorage from "hooks/useLocalStorage";
import { useRouter } from "next/router";
import Modal from "organisms/CharacterModal";
import { useState } from "react";
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
  const [localStorageFavorites, setLocalStorageFavorites] = useLocalStorage<
    any
  >("favorites", []);
  const router = useRouter();

  const handleClick = (char: Character) => {
    setIsOpen(true);
    setCharacter(char);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  const addToFavoriteHandler = (char: Character) => {
    setLocalStorageFavorites([...localStorageFavorites, char]);
  };

  const removeFromFavoriteHandler = (char: Character) => {
    setLocalStorageFavorites?.((prevFavorites: Character[]) =>
      prevFavorites?.filter((selected: any) => selected.id !== char.id)
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
            <TableHeader>
              {router.pathname === "/favorites"
                ? "Remove from favorites"
                : "Add to favorites"}
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data &&
            data?.length >= 1 &&
            data
              ?.filter((char) => char.name.toLowerCase().includes(query))
              .map((char: Character) => (
                <TableRow key={char?.id}>
                  <TableCell>
                    <NameContainer onClick={() => handleClick(char)}>
                      <Avatar
                        width={20}
                        height={20}
                        src={char?.image}
                        alt="image"
                      />
                      {char?.name}
                    </NameContainer>
                  </TableCell>
                  <TableCell>
                    {localStorageFavorites?.find(
                      (fav: Character) => fav.id === char.id
                    ) ? (
                      <MdFavorite
                        color="red"
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
