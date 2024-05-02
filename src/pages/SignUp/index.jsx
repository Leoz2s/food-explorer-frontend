import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "../../services/api";

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

  function handleSignUp(e) {
    e.preventDefault();
    if(!name || !email || !password) {
      return alert("Você precisa preencher todos  os campos!");
    }else if(password.length < 6) {
      return alert("A senha precisa ter no mínimo 6 caracteres!")
    };
    const role = "customer";

    api.post("/users", {name, email, password, role})
      .then(() => {
        alert("Usuário criado com sucesso!");
        navigate("/");
        console.log("hi")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        }else {
          alert("O cadastro de usuário não foi possível.");
        };
      });
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
            minLength="6"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button 
          text="Criar conta"
          onClick={e => handleSignUp(e)}
        />
        <ButtonText text="Já tenho uma conta" onClick={handleReturn} />
      </Form>
    </Container>
  );
};