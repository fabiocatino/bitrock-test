import useLocalStorage from "hooks/useLocalStorage";
import Table from "organisms/Table";
import { Character } from "types/character";
import { Container, Header } from "./styles";

type FavoriteProps = {};

function Favorite({}: FavoriteProps) {
  const [localStorageFavorites] = useLocalStorage<Character[]>("favorites", []);

  return (
    <Container>
      <Header>Rick and Morty</Header>
      <Table {...{ data: localStorageFavorites }} />
    </Container>
  );
}

export default Favorite;
