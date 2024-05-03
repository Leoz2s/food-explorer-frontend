import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Logo, ReceiptWrapper } from "./styles";
import {SideMenu} from "../SideMenu";
import {Input} from "../Input";
import {Button} from "../Button";

import MenuIcon from "../../assets/icons/Menu.svg";
import logo from "../../assets/icons/Polygon.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";

export function Header({onSearch, ...rest}) {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isAdmin = (user.role === "admin");

  function handleRedirectToHome() {
    navigate("/");
  };
  function handleRedirectToNewDish() {
    navigate("/new-dish");
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  return(
    <Container {...rest} >
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onSearch={onSearch}
      />
      <button>
        <img src={MenuIcon} alt="Menu icon" 
          className="mobile"
          onClick={() => setMenuIsOpen(true)}
        />
      </button>

      <button onClick={handleRedirectToHome}>
        <Logo>
          <h1>
            <img src={logo} alt="food explorer logo" />
            food explorer
          </h1>
          { isAdmin === true &&
            <span>admin</span>
          }
        </Logo>
      </button>

      { isAdmin === false &&
        <button>
          <ReceiptWrapper className="mobile">
            <div className="itens-amount">0</div>
            <img src={ReceiptIcon} alt="Receipt icon" />
          </ReceiptWrapper>
        </button>
      }

      <Input className="desktop" isSearch 
        placeholder="Busque por pratos ou ingredientes"
        onChange={e => onSearch(e.target.value)}
      />
      <Button className="desktop" 
        Icon={isAdmin ? "" : ReceiptIcon} 
        text={isAdmin ? "Novo prato" : `Pedidos (0)`}  
        onClick={isAdmin ? handleRedirectToNewDish : () => {}}  
      />
      <button className="desktop log-out-button">
        <img  
          src={SignOutIcon} alt="Logout" 
          onClick={handleSignOut} 
        />
      </button>
    </Container>
  );
};