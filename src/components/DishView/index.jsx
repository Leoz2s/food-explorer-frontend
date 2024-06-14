import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

export function DishView({data, pathname, quantity, updateFavorites, cartChanged, ...rest}) {
  const navigate = useNavigate();
  const {removeFromCart} = useAuth();
  const image = `${api.defaults.baseURL}/files/${data.image}`;

  function redirectToDishDetails() {
    navigate(`/details/${data.id}`)
  };

  async function removeFavorite() {
    await api.delete(`/dishes/${data.id}/favorites`);
    updateFavorites(data.id);
  };
  function handleRemoveFromCart(removeData) {
    removeFromCart(removeData);

    let [, priceNumber] = data.price.split("R$ ");
    priceNumber = Number(priceNumber.replace(",", "."));

    let cartValue = cartChanged[0];
    [, cartValue] = cartValue.split("R$ ");
    cartValue = Number(cartValue.replace(",", ".")).toFixed(2);
    const cartChangedFunction = cartChanged[1];

    cartChangedFunction(`R$ ${(cartValue - priceNumber).toFixed(2).replace(".", ",")}`);
  };

  return(
    <Container className={ pathname === "/check-out" ? `order-item` : ""} {...rest} >
      <div className="dish-mask item-image">
        <img src={image} alt="Imagem do prato" className="item-image" />
      </div>
      
      <div className="infos-action">
        <button className="dish-name"
          onClick={redirectToDishDetails}
        >
          { pathname === "/check-out" ? `${quantity} x ${data.name}` : data.name}
          { pathname === "/check-out" ? <span>{data.price}</span> : ""}
        </button>
        <button onClick={ pathname === "/check-out" ? () => handleRemoveFromCart([quantity, data]) : removeFavorite }>
          { pathname === "/check-out" ? "Excluir" : "Remover dos Favoritos" }
        </button>
      </div>
    </Container>
  );
};