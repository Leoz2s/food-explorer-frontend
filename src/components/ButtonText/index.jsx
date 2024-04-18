import { Container } from "./styles";

export function ButtonText({text, Icon, ...rest}) {
  return(
    <Container {...rest} >
      {Icon && <img src={Icon} />}
      {text}
    </Container>
  );
};