import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container } from "./styles";
import {Button} from "../Button";
import {NumericStepper} from "../NumericStepper";

import favoriteIcon from "../../assets/icons/Heart.svg"
import filledFavoriteIcon from "../../assets/icons/HeartFilled.svg"
import editIcon from "../../assets/icons/Pencil.svg"
import caretRightIcon from "../../assets/icons/CaretRight.svg"

export function Card({data, favorites, ...rest}) {
  const navigate = useNavigate();
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

  function redirectToEditDish() {
    navigate(`/edit-dish/${data.id}`);
  };

  function addDish() {
    console.log(`${amountValue} pratos de ${data.name} foram adicionados!`)
  };

  useEffect(() => {
    if(favorites.id == data.id) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favorited]);

  return(
    <Container {...rest} >
      { 
        data.role === "admin" &&  
        <img src={editIcon} alt="ícone de edição" 
          className="action-icon"
          onClick={redirectToEditDish}
        />
        ||
        favorited === false && <img 
          src={favoriteIcon} alt="ícone de prato não favoritado" 
          className="action-icon"
          onClick={addToFavorites}
        />
        ||
        favorited === true && <img 
          src={filledFavoriteIcon} alt="ícone de prato favoritado" 
          className="action-icon"
          onClick={removeFromFavorites}
        />
      }
      <img src={data.image} alt="Foto do prato." className="dish-image" />
      
      <Link to={`/details/${data.id}`}>
        <p>{data.name} <img src={caretRightIcon} /></p>
      </Link>
      <span>{data.price}</span>

      { data.role !== "admin" &&
        <NumericStepper amountvalue={setAmountValue} />
      }
      { data.role !== "admin" &&
        <Button text="Incluir" onClick={addDish} />
      }
    </Container>
  );
};