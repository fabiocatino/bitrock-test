import SearchBar from "atoms/SearchBar";
import TableCell from "atoms/TableCell";
import TableHeader from "atoms/TableHeader";
import TableRow from "atoms/TableRow";
import useLocalStorage from "hooks/useLocalStorage";
import { useRouter } from "next/router";
import Modal from "organisms/CharacterModal";
import { MouseEventHandler, useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { Character } from "types/character";
import {
  AddToFavoriteIcon,
  Avatar,
  Container,
  HeaderContainer,
  NameContainer,
  TableContainer,
} from "./styles";

type TableProps = {
  data?: Character[];
  setCharacters?: React.Dispatch<React.SetStateAction<Character[]>>;
};

function Table({ data, setCharacters }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [character, setCharacter] = useState<Character>();
  const [query, setQuery] = useState("");
  const [isAsc, setIsAsc] = useState(false);
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

  //Adds favorites to localstorage so they're not gone after refreshing
  const addToFavoriteHandler = (char: Character) => {
    setLocalStorageFavorites([...localStorageFavorites, char]);
  };

  const removeFromFavoriteHandler = (char: Character) => {
    setLocalStorageFavorites?.((prevFavorites: Character[]) =>
      prevFavorites?.filter((selected: Character) => selected.id !== char.id)
    );
  };

  //Compares the first name with the second one, and sorts it alphabetically
  const sortHandler = (e: any) => {
    const newList = [...data!];
    const sortedList = newList.sort((a, b) =>
      e.target.id === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    e.target.id === "asc" ? setIsAsc(false) : setIsAsc(true);
    setCharacters?.(sortedList);
  };
  return (
    <Container>
      {isOpen && <Modal {...{ close: () => setIsOpen(false), character }} />}
      <SearchBar onChange={handleSearch} />
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeader>
              <HeaderContainer>
                Name{" "}
                {isAsc ? (
                  <AiOutlineSortAscending id="asc" onClick={sortHandler} />
                ) : (
                  <AiOutlineSortDescending onClick={sortHandler} />
                )}
              </HeaderContainer>
            </TableHeader>
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
