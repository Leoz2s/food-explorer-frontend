import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {ButtonText} from "../../components/ButtonText";

import logo from "../../assets/icons/Polygon.svg";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if(!name || !email || !password) {
      alert("Você precisa preencher os campos de nome, email e senha para cadastrar sua conta.");
    };
    return
  };

  function handleReturn() {
    navigate("/");
  };

  return (
    <Container >
      <h1><img src={logo} alt="food explorer logo" /> food explorer</h1>

      <Form>
        <h2 id="desktop-title">Crie sua conta</h2>

        <div className="input-wrapper">
          <p>Seu nome</p>
          <Input 
            type="text"
            placeholder="Exemplo: Maria da Silva" 
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <p>Email</p>
          <Input 
            type="email"
            placeholder="Exemplo: examplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <p>Senha</p>
          <Input 
            type="password"
            minlength="6"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button 
          text="Criar conta"
          onClick={handleSignUp}
        />
        <ButtonText text="Já tenho uma conta" onClick={handleReturn} />
      </Form>
    </Container>
  );
};