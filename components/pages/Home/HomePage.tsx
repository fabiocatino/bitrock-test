import axios from "axios";
import { GlobalContext } from "context/GlobalContext";
import Table from "organisms/Table";
import { useCallback, useContext, useEffect } from "react";
import { Container, Header } from "./styles";

type HomePageProps = {};

function HomePage({}: HomePageProps) {
  const { characters, setCharacters } = useContext(GlobalContext);

  const getRickAndMortyCharacters = useCallback(async () => {
    try {
      const resp = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters?.(resp.data.results);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }, [setCharacters]);

  useEffect(() => {
    getRickAndMortyCharacters();
  }, [getRickAndMortyCharacters]);

  return (
    <Container>
      <Header>Rick and Morty</Header>
      <Table {...{ data: characters }} />
    </Container>
  );
}

export default HomePage;
