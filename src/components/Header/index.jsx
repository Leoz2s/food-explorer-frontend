import { useNavigate } from "react-router-dom";

import { Container, Logo, ReceiptWrapper } from "./styles";
import {Input} from "../Input";
import {Button} from "../Button";

import MenuIcon from "../../assets/icons/Menu.svg";
import logo from "../../assets/icons/Polygon.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";

export function Header({...rest}) {
  const navigate = useNavigate();

  const isAdmin = false

  function redirectToMenu() {
    navigate("/menu");
  };
  function redirectToHome() {
    navigate("/");
  };

  return(
    <Container {...rest} >
      <img src={MenuIcon} alt="Menu icon" 
        className="mobile"
        onClick={redirectToMenu}
      />

      <Logo>
        <h1 onClick={redirectToHome}>
          <img src={logo} alt="food explorer logo" />
          food explorer
        </h1>
        { isAdmin === true &&
          <span>admin</span>
        }
      </Logo>

      { isAdmin === false &&
        <ReceiptWrapper className="mobile">
          <div className="itens-amount">0</div>
          <img src={ReceiptIcon} alt="Receipt icon" />
        </ReceiptWrapper>
      }

      <Input className="desktop" isSearch placeholder="Busque por pratos ou ingredientes" />
      <Button className="desktop" Icon={isAdmin ? "" : ReceiptIcon} text={isAdmin ? "Novo prato" : `Pedidos (0)`}  />
      <img className="desktop" src={SignOutIcon} alt="Logout" />
    </Container>
  );
};