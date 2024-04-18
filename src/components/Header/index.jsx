import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import MenuIcon from "../../assets/icons/Menu.svg";
import logo from "../../assets/icons/Polygon.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";

export function Header({...rest}) {
  const navigate = useNavigate();

  const isAdmin = true

  function redirectToMenu() {
    navigate("/menu");
  };
  function redirectToHome() {
    navigate("/");
  };

  return(
    <Container {...rest} >
      <img src={MenuIcon} alt="Menu icon" 
        onClick={redirectToMenu}
      />

      <h1 onClick={redirectToHome}>
        <img src={logo} alt="food explorer logo" />
        food explorer
      </h1>
      { isAdmin === true &&
        <span>admin</span>
      }

      { isAdmin !== true &&
        <div className="receipt-wrapper">
          <img src={ReceiptIcon} alt="Receipt icon" />
          <div className="itens-amount">0</div>
        </div>
      }
    </Container>
  );
};