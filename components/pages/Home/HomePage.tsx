import Pagination from "atoms/Pagination";
import axios from "axios";
import { GlobalContext } from "context/GlobalContext";
import Table from "organisms/Table";
import { useCallback, useContext, useEffect, useState } from "react";
import { Container, Header } from "./styles";

type HomePageProps = {};

function HomePage({}: HomePageProps) {
  const { characters, setCharacters } = useContext(GlobalContext);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getRickAndMortyCharacters = useCallback(async () => {
    try {
      const resp = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      setCharacters?.(resp.data.results);
      setPages(resp.data.info.pages);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }, [currentPage, setCharacters]);

  useEffect(() => {
    getRickAndMortyCharacters();
  }, [getRickAndMortyCharacters]);

  return (
    <Container>
      <Header>Rick and Morty</Header>
      <Table {...{ data: characters }} />
      <Pagination
        {...{
          pages,
          currentPage,
          setCurrentPage,
          pageLimit: 5,
          minPages: 0,
          maxPages: 15,
        }}
      />
    </Container>
  );
}

export default HomePage;
