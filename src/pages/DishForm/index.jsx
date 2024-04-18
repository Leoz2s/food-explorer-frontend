
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import DeleteIcon from "../../assets/icons/Close.svg";

import {Container, Main, Form} from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Input} from "../../components/Input";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {Footer} from "../../components/Footer";

export function DishForm() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  function handleReturn() {
    navigate(-1);
  };

  useEffect(() => {
    setIngredients(["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate",]);
  }, []);

  return(
    <Container >
      <Header />

      <Main>
        <ButtonText 
          Icon={CaretLeftIcon}
          text="voltar"
          onClick={handleReturn} 
        />
        <h2>Novo prato</h2>

        <div className="input-wrap">
          <p>Imagem do prato</p>
          <Input />
        </div>

        <div className="input-wrap">
          <p>Nome</p>
          <Input 
            tpye="text" 
            placeholder="Ex.: Salada Ceasar"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrap">
          <p>Categoria</p>
          <Input />
        </div>

        <div className="input-wrap">
          <p>Ingredientes</p>
          <div className="ingredients-group">
            { ingredients &&
              ingredients.map((ingredient, index) => (
                <Tag key={index} text={ingredient} Icon={DeleteIcon} />
              ))
            }
          </div>
        </div>
          
        <div className="input-wrap">
          <p>Preço</p>
          <Input 
            type="number"
            placeholder="R$ 00,00" 
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <div className="input-wrap">
          <p>Descrição</p>
          <Input 
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <Button text="Salvar alterações" />
      </Main>

      <Footer />
    </Container>
  );
};