import { useEffect, useState } from "react";

import { Container } from "./styles";
import {Button} from "../Button";
import {NumericStepper} from "../NumericStepper";

import favoriteIcon from "../../assets/icons/Heart.svg"
import filledFavoriteIcon from "../../assets/icons/HeartFilled.svg"
import editIcon from "../../assets/icons/Pencil.svg"
import caretRightIcon from "../../assets/icons/CaretRight.svg"

export function Card({data, favorites, ...rest}) {
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

  function addDish() {
    console.log(`${amountValue} pratos de ${data.name} foram adicionados!`)
  };

  function editDish() {
    console.log("Edit dish.")
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
          onClick={editDish}
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
      <p>{data.name} <img src={caretRightIcon} /></p>

      <span>{data.price}</span>
      <NumericStepper amountvalue={setAmountValue} />

      <Button text="Incluir" onClick={addDish} />
    </Container>
  );
};