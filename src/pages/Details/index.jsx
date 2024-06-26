import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";

import {Container, Main, Dish, DishInfosAndActions } from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {NumericStepper} from "../../components/NumericStepper";
import {Footer} from "../../components/Footer";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const {user, addToCart} = useAuth();
  
  const [data, setData] = useState({});
  const [amount, setAmount] = useState({});
  const [updateItemsQuantity, setUpdateItemsQuantity] = useState(0);

  const image = `${api.defaults.baseURL}/files/${data.image}`;
  const isAdmin = (user.role === "admin");
  
  function handleReturn() {
    navigate(-1);
  };
  function handleRedirectToEdit() {
    navigate(`/edit-dish/${data.id}`);
  };
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    };
    fetchDish();

  }, []);

  return(
    <Container >
      <Header updateItemsQuantity={updateItemsQuantity} />

      <Main>
        <ButtonText Icon={CaretLeftIcon} text="voltar" onClick={handleReturn} />

        <Dish>
          <div className="dish-mask item-image">
            <img src={image} alt="Foto do prato" className="item-image" />
          </div>

          <DishInfosAndActions>
            <div className="dish-info">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              
              <div className="ingredients-group">
                { data.ingredients &&
                  data.ingredients.map(ingredient => (
                    <Tag key={ingredient.id} value={ingredient.name} />
                  ))
                }
              </div>
            </div>

            <div className="action-group">
              { isAdmin === false &&
                <NumericStepper amountvalue={setAmount} />
              }

              { isAdmin === false && 
                <Button className="mobile"
                  Icon={ReceiptIcon}
                  text={`pedir ∙ ${data.price}`}
                  onClick={() => {addToCart([amount, data]) 
                    setUpdateItemsQuantity(prevState => prevState + 1)}} 
                />
              }
              { isAdmin === false && 
                <Button className="desktop" 
                  text={`incluir ∙ ${data.price}`}
                  onClick={() => {addToCart([amount, data]) 
                    setUpdateItemsQuantity(prevState => prevState + 1)}} 
                />
              }
              { isAdmin === true &&
                <Button className="edit-button"
                  text={`Editar prato`} 
                  onClick={handleRedirectToEdit}
                />
              }
            </div>
          </DishInfosAndActions>
        </Dish>
      </Main>

      <Footer />
    </Container>
  );
};