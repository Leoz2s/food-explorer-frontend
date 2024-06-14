import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import {USER_ROLE} from "../../utils/roles";

import { Container, Logo, ReceiptWrapper } from "./styles";
import {SideMenu} from "../SideMenu";
import {Input} from "../Input";
import {Button} from "../Button";
import {ButtonText} from "../ButtonText";

import MenuIcon from "../../assets/icons/Menu.svg";
import logo from "../../assets/icons/Polygon.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";

export function Header({onSearch, updateItemsQuantity, ...rest}) {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const isAdmin = [USER_ROLE.ADMIN,].includes(user.role);

  function handleRedirectToHome() {
    navigate("/");
  };
  function handleRedirectToFavorites() {
    navigate("/favorites");
  };
  function handleRedirectToOrderHistory() {
    navigate("/orders");
  };  
  function handleRedirectToCheckOut() {
    navigate("/check-out");
  };
  function handleRedirectToNewDish() {
    navigate("/new-dish");
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  function countItemsInCart() {
    const storedItems = localStorage.getItem("@food-explorer:cart");
    const allItems = JSON.parse(storedItems);
    let itemsCount = 0;
    allItems.forEach(item => itemsCount = itemsCount + item[0]);
    setItemsQuantity(itemsCount);
  };

  useEffect(() => {
    countItemsInCart();
  }, [updateItemsQuantity]);

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
          <ReceiptWrapper className="mobile" 
            onClick={handleRedirectToCheckOut}
          >
            <div className="items-amount">{itemsQuantity}</div>
            <img src={ReceiptIcon} alt="Receipt icon" />
          </ReceiptWrapper>
        </button>
      }

      <Input className="desktop" isSearch 
        placeholder="Busque por pratos ou ingredientes"
        onChange={e => onSearch(e.target.value)}
      />

      { isAdmin === false &&
        <ButtonText className="desktop" 
          text="Meus favoritos" 
          onClick={handleRedirectToFavorites} 
        />
      }
      
      <ButtonText className="desktop" 
        text="Histórico de pedidos" 
        onClick={handleRedirectToOrderHistory} 
      />
      
      <Button className="desktop red-button" 
        Icon={isAdmin ? "" : ReceiptIcon} 
        text={isAdmin ? "Novo prato" : `Pedidos (${itemsQuantity})`}  
        onClick={isAdmin ? handleRedirectToNewDish : handleRedirectToCheckOut}  
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