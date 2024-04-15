import { Container } from "./styles";

import logo from "../../assets/icons/PolygonGrey.svg";

export function Footer({...rest}) {
  return(
    <Container {...rest} >
      <p><img src={logo} alt="food explorer logo" /> food explorer</p>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
};