import {Container, MenuItem} from "./styles";
import {Input} from "../../components/Input";
import {Footer} from "../../components/Footer";

import closeIcon from "../../assets/icons/Close.svg"

export function Menu() {
  const isAdmin = true;

  return(
    <Container >
      <header>
        <img src={closeIcon} alt="Close icon" />
        <h1>Menu</h1>
      </header>

      <main>
        <Input placeholder="Busque por pratos ou ingredientes" />

        { isAdmin &&
          <h2>Novo prato</h2>
        }
          
        <MenuItem>
          <h2>Sair</h2>
        </MenuItem>
      </main>

      <Footer />
    </Container>
  );
};