import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {Container, Form} from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {ButtonText} from "../../components/ButtonText";

import logo from "../../assets/icons/Polygon.svg";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {signIn} = useAuth();

  function handleLogin(event) {
    event.preventDefault();
    if(!email || !password) {
      return alert("Você precisa preencher os campos de email e senha para fazer Login.");
    };

    signIn({email, password});
  };

  function handleRedirectToSignUp() {
    navigate("/register");
  };

  return(
    <Container>
      <h1><img src={logo} alt="food explorer logo" /> food explorer</h1>

      <Form>
        <h2 id="desktop-title">Faça login</h2>

        <div className="input-wrapper">
          <p>Email</p>
          <Input 
            placeholder="Exemplo: examplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <p>Senha</p>
          <Input 
            type="password"
            placeholder="No mínimo 6 caracteres" 
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button 
          text="Entrar"
          onClick={event => handleLogin(event)}
        />

        <ButtonText text="Criar uma conta" onClick={handleRedirectToSignUp} />
      </Form>
    </Container>
  );
};