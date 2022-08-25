import Link from "next/link";
import { Container } from "./styles";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <Container>
      <Link href={"/"}>Home</Link>
      <Link href={"/favorites"}>Favorites</Link>
    </Container>
  );
}

export default Navbar;
