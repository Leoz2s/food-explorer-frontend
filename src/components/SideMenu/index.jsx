import { useNavigate } from "react-router-dom";
import {USER_ROLE} from "../../utils/roles";

import {Container, Header, Main, MenuItem} from "./styles";
import {Input} from "../Input";
import {Footer} from "../Footer";

import closeIcon from "../../assets/icons/Close.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import { useAuth } from "../../hooks/auth";

export function SideMenu({menuIsOpen, onCloseMenu, onSearch}) {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();

  const isAdmin = [USER_ROLE.ADMIN,].includes(user.role);

  function handleRedirectToNewDish() {
    navigate("/new-dish");
  };
  function handleRedirectToFavorites() {
    navigate("/favorites");
  };
  function handleRedirectToOrderHistory() {
    navigate("/orders");
  };
  function handleSignOut() {
    navigate("/");
    signOut();
  };

  return(
    <Container data-menu-is-open={menuIsOpen} >
      <Header>
        { menuIsOpen &&
          <button>
            <img src={closeIcon} alt="Close icon" onClick={onCloseMenu}/>
          </button>
        }
        <h1>Menu</h1>
      </Header>

      <Main>
        <Input 
          type="text"
          placeholder="Busque por pratos ou ingredientes" 
          Icon={SearchIcon}
          onChange={e => onSearch(e.target.value)}
        />
          
        <MenuItem>
          { isAdmin &&
            <button>
              <p onClick={handleRedirectToNewDish} >Novo prato</p>
            </button>
          }

          { isAdmin === false &&
            <button>
              <p onClick={handleRedirectToFavorites}>Meus favoritos</p>
            </button>
          }

          <button>
            <p onClick={handleRedirectToOrderHistory}>Histórico de pedidos</p>
          </button>

          <button>
            <p onClick={handleSignOut}>Sair</p>
          </button>
        </MenuItem>
      </Main>

      <Footer />
    </Container>
  );
};