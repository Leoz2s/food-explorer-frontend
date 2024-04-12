import {Container} from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export function Home() {
  return(
    <Container>
      <main>
        <h1>Food Explorer</h1>

        <Input placeholder="examplo@email.com" />
        <Input placeholder="No mínimo 6 caracteres" />
        <Button text="LogIn" />
      </main>
    </Container>
  );
};