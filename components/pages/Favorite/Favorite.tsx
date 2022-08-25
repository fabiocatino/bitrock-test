import { GlobalContext } from "context/GlobalContext";
import Table from "organisms/Table";
import { useContext } from "react";
import { Container, Header } from "./styles";

type Props = {};

function Favorite({}: Props) {
  const { favorites } = useContext(GlobalContext);
  return (
    <Container>
      <Header>Rick and Morty</Header>
      <Table {...{ data: favorites }} />
    </Container>
  );
}

export default Favorite;
