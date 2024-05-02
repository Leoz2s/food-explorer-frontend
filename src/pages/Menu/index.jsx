import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {Container, Header, Main, MenuItem} from "./styles";
import {Input} from "../../components/Input";
import {Footer} from "../../components/Footer";

import closeIcon from "../../assets/icons/Close.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import { useAuth } from "../../hooks/auth";

export function Menu() {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();
  const [search, setSearch] = useState("");

  const isAdmin = (user.role === "admin");

  function handleCloseMenu() {
    navigate(-1);
  };
  function handleRedirectToNewDish() {
    navigate("/new-dish");
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  return(
    <Container >
      <Header>
        <img src={closeIcon} alt="Close icon" onClick={handleCloseMenu}/>
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
            <p onClick={handleRedirectToNewDish} >Novo prato</p>
          }
          <p onClick={handleSignOut}>Sair</p>
        </MenuItem>
      </Main>

      <Footer />
    </Container>
  );
};