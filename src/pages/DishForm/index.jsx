import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import UploadIcon from "../../assets/icons/UploadSimple.svg";
import DeleteIcon from "../../assets/icons/Close.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg";

import {Container, Main, Form, Label, Select, Textarea} from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Input} from "../../components/Input";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {Footer} from "../../components/Footer";

export function DishForm() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Selecione a categoria");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("Adicionar");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  
  const editingDish = true

  function handleReturn() {
    navigate(-1);
  };

  function handleAddIngredient() {
    setIngredients([...ingredients, newIngredient]);
  };
  function handleRemoveIngredient(ingredientToRemove) {
    const filteredIngredients = ingredients.filter(ingredient => ingredient !== ingredientToRemove);
    setIngredients(filteredIngredients);
  };

  useEffect(() => {
    setIngredients(["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate",]);

    async function editOrCreateDish() {
      await setData(
        {
          id: 1,
          name: "Salada Ravanello",
          category: "meal",
          description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
          ingredients: [
            "alface", "cebola", "pão naan", "pepino", "rabanete", "tomate",
          ],
          price: "R$ 25,00",
        }
      );

      if(editingDish && data.category == "meal") {
        setCategory("Refeição");
      } else if(editingDish && data.category == "dessert") {
        setCategory("Sobremesa");
      } else if(editingDish && data.category == "drink") {
        setCategory("Bebida");
      };
    };
    editOrCreateDish();
  }, []);

  return(
    <Container >
      <Header />

      <Main>
        <ButtonText 
          Icon={CaretLeftIcon} text="voltar"
          onClick={handleReturn} 
        />
        <h2>{editingDish ? "Editar prato" : "Novo prato"}</h2>

        <Form>
          <div className="input-wrap image-input">
            <p>Imagem do prato</p>

            <Label htmlFor="upload" ><img src={UploadIcon}/>{editingDish ? "Selecione imagem para alterá-la" : "Selecione imagem"}</Label>
            <Input type="file" id="upload" />
          </div>

          <div className="input-wrap name-input">
            <p>Nome</p>
            <Input 
              type="text" 
              placeholder={editingDish ? data.name : "Ex.: Salada Ceasar"}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-wrap category-input">
            <p>Categoria</p>

            <Select>
              <div id="category-select">
                {/* <label htmlFor="options-view-button">Categoria</label> */}
                <input type="checkbox" id="options-view-button" />

                <div id="select-button">
                  <div id="selected-value">{category}</div>

                  <div id="chevrons">
                    <img src={ChevronDownIcon}/>
                    <img src={ChevronUpIcon}/>
                  </div>
                </div>
              </div>

              <ul id="options">
                <li className="option">
                  <input
                    type="radio"
                    name="category"
                    value="meal"
                    data-label="Refeição"
                    onClick={e => setCategory(e.target.dataset.label)}
                  />
                  <span>Refeição</span>
                </li>

                <li className="option">
                  <input
                    type="radio"
                    name="category"
                    value="dessert"
                    data-label="Sobremesa"
                    onClick={e => setCategory(e.target.dataset.label)}
                  />
                  <span>Sobremesa</span>
                </li>

                <li className="option">
                  <input
                    type="radio"
                    name="category"
                    value="drink"
                    data-label="Bebida"
                    onClick={e => setCategory(e.target.dataset.label)}
                  />
                  <span>Bebida</span>
                </li>
              </ul>
            </Select>
          </div>

          <div className="input-wrap ingredients-input">
            <p>Ingredientes</p>
            <div className="ingredients-group">
              { ingredients &&
                ingredients.map((ingredient, index) => (
                  <Tag 
                    key={index}
                    value={ingredient} 
                    Icon={DeleteIcon} IconAlt="Remover o ingrediente"
                    onClick={e => handleRemoveIngredient(e.target.value)}
                  />
                ))
              }
              <Tag 
                isNew 
                placeholder="Adicionar"
                onClick={handleAddIngredient}
                onChange={e => setNewIngredient(e.target.value)}
              />
            </div>
          </div>
            
          <div className="input-wrap price-input">
            <p>Preço</p>
            <Input 
              type="number"
              placeholder={editingDish ? data.price : "R$ 00,00"}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrap description-input">
            <p>Descrição</p>
            <Textarea 
              type="textarea"
              placeholder={editingDish ? data.description : "Fale brevemente sobre o prato, seus ingredientes e composição"}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          
          <div id="buttons-group">
            { editingDish === true &&
              <Button id="delete-button" text="Excluir prato" />
            }
            <Button text="Salvar alterações" />
          </div>
        </Form>
      </Main>

      <Footer />
    </Container>
  );
};