import { Container } from "./styles";

export function ButtonText({text, ...rest}) {
  return(
    <Container {...rest} >
      {text}
    </Container>
  );
};