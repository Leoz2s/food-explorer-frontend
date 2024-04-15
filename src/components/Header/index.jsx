import { Container } from "./styles";

import MenuIcon from "../../assets/icons/Menu.svg";
import logo from "../../assets/icons/Polygon.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";

export function Header({...rest}) {
  return(
    <Container {...rest} >
      <img src={MenuIcon} alt="Menu icon" />

      <h1><img src={logo} alt="food explorer logo" /> food explorer</h1>

      <div className="receipt-wrapper">
        <img src={ReceiptIcon} alt="Receipt icon" />
        <div className="itens-amount">0</div>
      </div>
    </Container>
  );
};