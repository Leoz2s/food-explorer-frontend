import { Container } from "./styles";

export function Button({text, ...rest}) {
  return(
    <Container {...rest} >
      {text}
    </Container>
  );
};