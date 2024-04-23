import { useEffect, useState } from "react";

import DishImage from "../../assets/images/dishes-and-drinks-mask-group/0-Dish.png"

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import ReceiptIcon from "../../assets/icons/Receipt.svg";

import {Container, Main, Dish, DishInfosAndActions } from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {NumericStepper} from "../../components/NumericStepper";
import {Footer} from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export function Details() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [amount, setAmount] = useState({});

  const isAdmin = false

  function handleReturn() {
    navigate(-1);
  };
  function handleRedirectToEdit() {
    navigate(`/edit-dish/${data.id}`);
  };

  useEffect(() => {
    setData(
      {
        id: 1,
        image: `${DishImage}`,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
        ingredients: [
          "alface", "cebola", "pão naan", "pepino", "rabanete", "tomate",
        ],
        price: "R$ 25,00",
      }
    );
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

        <Dish>
          <img src={data.image} alt="Foto do prato" />

          <DishInfosAndActions>
            <div className="dish-info">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              
              <div className="ingredients-group">
                { data.ingredients &&
                  data.ingredients.map((ingredient, index) => (
                    <Tag key={index} value={ingredient} />
                  ))
                }
              </div>
            </div>

            <div className="action-group">
              { isAdmin === false &&
                <NumericStepper amountvalue={setAmount} />
              }
              { isAdmin === false && 
                <Button 
                  Icon={ReceiptIcon}
                  text={`pedir ∙ ${data.price}`} 
                />
              }
              { isAdmin === true &&
                <Button 
                  text={`Editar prato`} className="edit-button" 
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