
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import UploadIcon from "../../assets/icons/UploadSimple.svg";
import DeleteIcon from "../../assets/icons/Close.svg";
import PlusIcon from "../../assets/icons/Plus.svg";

import {Container, Main, Form, Label, Select, Textarea} from "./styles";
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

  function handleAddIngredient() {
    console.log("Added")
  };
  function handleRemoveIngredient() {
    console.log("Removed")
  };

  useEffect(() => {
    setIngredients(["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate",]);
  }, []);

  return(
    <Container >
      <Header />

      <Main>
        <ButtonText 
          Icon={CaretLeftIcon} text="voltar"
          onClick={handleReturn} 
        />
        <h2>Novo prato</h2>

        <Form>
          <div className="input-wrap image-input">
            <p>Imagem do prato</p>

            <Label htmlFor="upload" ><img src={UploadIcon}/>Selecione imagem</Label>
            <Input type="file" id="upload" />
          </div>

          <div className="input-wrap name-input">
            <p>Nome</p>
            <Input 
              type="text" 
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-wrap category-input">
            <p>Categoria</p>
            <Select>
              <option valie="meal">Refeição</option>
              <option valie="dessert">Sobremesa</option>
              <option valie="drink">Bebida</option>
            </Select>
          </div>

          <div className="input-wrap ingredients-input">
            <p>Ingredientes</p>
            <div className="ingredients-group">
              { ingredients &&
                ingredients.map((ingredient, index) => (
                  <Tag 
                    key={index}
                    text={ingredient} 
                    Icon={DeleteIcon} IconAlt="Remover o ingrediente"
                    onClick={handleRemoveIngredient}
                  />
                ))
              }
              <Tag 
                text="Adicionar"
                placeholder="Adicionar"
                isNew 
                onClick={handleAddIngredient}
              />
            </div>
          </div>
            
          <div className="input-wrap price-input">
            <p>Preço</p>
            <Input 
              type="number"
              placeholder="R$ 00,00" 
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrap description-input">
            <p>Descrição</p>
            <Textarea 
              type="textarea"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button text="Salvar alterações" />
        </Form>
      </Main>

      <Footer />
    </Container>
  );
};