import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {Container, Header, Main, MenuItem} from "./styles";
import {Input} from "../../components/Input";
import {Footer} from "../../components/Footer";

import closeIcon from "../../assets/icons/Close.svg";
import SearchIcon from "../../assets/icons/Search.svg";

export function Menu() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const isAdmin = true;

  return(
    <Container >
      <Header>
        <Link to="/">
          <img src={closeIcon} alt="Close icon" />
        </Link>
        <h1>Menu</h1>
      </Header>

      <Main>
        <Input 
          type="text"
          placeholder="Busque por pratos ou ingredientes" 
          Icon={SearchIcon}
          onChange={e => setSearch(e.target.value)}
        />
          
        <MenuItem>
          { isAdmin &&
            <p>Novo prato</p>
          }
          <p>Sair</p>
        </MenuItem>
      </Main>

      <Footer />
    </Container>
  );
};