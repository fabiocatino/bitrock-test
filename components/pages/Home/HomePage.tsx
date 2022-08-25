import axios from "axios";
import { GlobalContext } from "context/GlobalContext";
import Table from "organisms/Table";
import { useContext, useEffect } from "react";
import { Container } from "./styles";

type Props = {};

function HomePage({}: Props) {
  const { characters, setCharacters } = useContext(GlobalContext);
  const getRickAndMortyCharacters = async () => {
    const resp = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(resp);
    setCharacters!(resp.data.results);
  };

  useEffect(() => {
    getRickAndMortyCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Table {...{ data: characters }} />
    </Container>
  );
}

export default HomePage;
