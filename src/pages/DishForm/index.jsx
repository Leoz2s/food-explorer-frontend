import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import UploadIcon from "../../assets/icons/UploadSimple.svg";
import DeleteIcon from "../../assets/icons/Close.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg";

import {Container, Main, Form, Image_Name_Category_Inputs, Ingredients_Price_Inputs, Label, Select, Textarea} from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Input} from "../../components/Input";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {Footer} from "../../components/Footer";

export function DishForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [editingDish, setEditingDish] = useState(false);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Selecione a categoria");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  
  function handleReturn() {
    navigate(-1);
  };

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };
  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientToRemove));
  };

  async function handleCreateDish(e) {
    e.preventDefault();
    
    if(!name || category === "Selecione a categoria" || !ingredients[0] || !price || !description ) {
      return alert("Preencher todos os campos é necessário para criar um novo prato.");
    }else if(newIngredient) {
      return alert("Um novo ingrediente foi deixado no campo de novos ingredientes. Adicione o novo ingrediente ou esvazie o campo.");
    };
    
    const response = await api.post("/dishes", {name, category, ingredients, price, description});
    
    if(image) {
      const {dish_id} = response.data;

      const fileUploadForm = new FormData();
      fileUploadForm.append("image", image);
      
      await api.patch(`/dishes/${dish_id}/image`, fileUploadForm);
    };
    
    alert("Prato criado com sucesso!");
    navigate("/");
  };
  
  function handleDeleteDish() {
    const confrim = window.confirm("Você quer mesmo deletar este consumível?");
    if(confrim) {
      api.delete(`/dishes/${params.id}`);
      navigate("/");
    };
  };

  async function handleUpdateDish(e) {
    e.preventDefault();
    try {
      if(newIngredient) {
        return alert("Um novo ingrediente foi deixado no campo de novos ingredientes. Adicione o novo ingrediente ou esvazie o campo.");
      };

      const dish = {
        name: name == "" ? data.name : name,
        category,
        ingredients,
        price: price == 0 ? data.price : price,
        description: description == "" ? data.description : description
      };

      await api.put(`/dishes/${params.id}`, dish);
      
      if(image) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);
        
        await api.patch(`/dishes/${params.id}/image`, fileUploadForm);
      };
      
      alert("Os dados foram atualizados.");
      navigate("/");

    }catch(error) {
      if(error.response) {
        console.log(error.response)
        alert(error.response.data.message);
      }else {
        alert("A atualização dos dados não foi possível.");
      };
    };
  };

  function handleNewImage(event) {
    const file = event.target.files[0];
    setImage(file);
  };
  
  function handleFormatPrice(value) {
    if(value > 0) {
      let formatedPrice = String("R$ " + value).replace('.', ',');
      if(formatedPrice.includes(',')){
        setPrice(formatedPrice);
      }else {
        setPrice(formatedPrice += ",00");
      };
    };
  };

  useEffect(() => {
    async function createOrEditDish() {
      if(params.id) {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
        setEditingDish(true);

        if(response.data.category == "Refeição") {
          setCategory("Refeição");
        } else if(response.data.category == "Sobremesa") {
          setCategory("Sobremesa");
        } else if(response.data.category == "Bebida") {
          setCategory("Bebida");
        };

        setIngredients(response.data.ingredients);  
      }else {
        setEditingDish(false);
      };
    };
    createOrEditDish();

  }, []);

  return(
    <Container >
      <Header />

      <Main>
        <ButtonText Icon={CaretLeftIcon} text="voltar" onClick={handleReturn} />
        <h2>{editingDish ? "Editar prato" : "Novo prato"}</h2>

        <Form>
          <Image_Name_Category_Inputs>
            <div className="input-wrap image-input">
              <p>Imagem do prato</p>

              <Label htmlFor="upload" ><img src={UploadIcon}/>{"Selecione imagem"}</Label>
              <Input type="file" id="upload" onChange={handleNewImage} />
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
          </Image_Name_Category_Inputs>

          <Ingredients_Price_Inputs>
            <div className="input-wrap ingredients-input">
              <p>Ingredientes</p>
              <div className="ingredients-group">
                { ingredients &&
                  ingredients.map((ingredient, index) => (
                    <Tag 
                      key={String(index)}
                      Icon={DeleteIcon} IconAlt="Remover o ingrediente"
                      value={ingredient.name || ingredient} 
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }
                <Tag 
                  isNew 
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>
              
            <div className="input-wrap price-input">
              <p>Preço</p>
              <Input 
                type="number"
                placeholder={editingDish ? data.price : "R$ 00,00"}
                onChange={e => handleFormatPrice(e.target.value)}
              />
            </div>
          </Ingredients_Price_Inputs>

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
              <Button id="delete-button" text="Excluir prato" onClick={handleDeleteDish} />
            }
            <Button text="Salvar alterações" onClick={editingDish ? e => handleUpdateDish(e) : e => handleCreateDish(e)} />
          </div>
        </Form>
      </Main>

      <Footer />
    </Container>
  );
};