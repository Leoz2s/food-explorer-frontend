import { Container } from "./styles";

export function Input({Icon, ...rest}) {
  return(
    <Container {...rest} >
      {Icon}
    </Container>
  );
};