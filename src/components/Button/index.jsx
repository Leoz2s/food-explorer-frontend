import { Container } from "./styles";

export function Button({text, Icon, ...rest}) {
  return(
    <Container {...rest} >
      {Icon && <img src={Icon}/> }
      {text}
    </Container>
  );
};