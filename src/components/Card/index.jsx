import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import {USER_ROLE} from "../../utils/roles";

import { Container } from "./styles";
import {Button} from "../Button";
import {NumericStepper} from "../NumericStepper";

import favoriteIcon from "../../assets/icons/Heart.svg"
import filledFavoriteIcon from "../../assets/icons/HeartFilled.svg"
import editIcon from "../../assets/icons/Pencil.svg"
import caretRightIcon from "../../assets/icons/CaretRight.svg"

export function Card({data, favorites, ...rest}) {
  const navigate = useNavigate();
  const {user} = useAuth();
  const image = `${api.defaults.baseURL}/files/${data.image}`;

  const isAdmin = [USER_ROLE.ADMIN,].includes(user.role);
  
  const [amountValue, setAmountValue] = useState(0);
  const [favorited, setFavorited] = useState(false);
  
  function addToFavorites() {
    favorites.id = data.id;
    setFavorited(true);
  };
  function removeFromFavorites() {
    favorites.id = 0;
    setFavorited(false);
  };
  function redirectToDishDetails() {
    navigate(`/details/${data.id}`);
  };
  
  function redirectToEditDish() {
    navigate(`/edit-dish/${data.id}`);
  };  
  
  function addDish() {
    console.log(`${amountValue} unidades de ${data.name} foram adicionadas!`)
  };
  
  useEffect(() => {
    if(favorites.id == data.id) {
      setFavorited(true);
    }else {
      setFavorited(false);
    };
  }, [favorited]);

  return(
    <Container {...rest} >
      { 
        isAdmin &&  
        <button className="action-icon" onClick={redirectToEditDish} >
          <img src={editIcon} alt="ícone de edição" />
        </button>
        ||
        favorited === false && 
        <button className="action-icon" onClick={addToFavorites} >
          <img src={favoriteIcon} alt="ícone de prato não favoritado" />
        </button>
        ||
        favorited === true && 
        <button className="action-icon" onClick={removeFromFavorites} >
          <img src={filledFavoriteIcon} alt="ícone de prato favoritado" />
        </button>
      }

      <img src={image} alt="Foto do consumível" className="dish-image" />
      
      <button onClick={redirectToDishDetails}>
        <h3>
          {data.name} <img src={caretRightIcon} />
        </h3>
      </button>

      <p className="desktop" >{data.description}</p>

      <span>{data.price}</span>

      <div className="stepper-button">
        { isAdmin == false &&
          <NumericStepper amountvalue={setAmountValue} />
        }
        { isAdmin == false &&
          <Button text="Incluir" onClick={addDish} />
        }
      </div>
    </Container>
  );
};