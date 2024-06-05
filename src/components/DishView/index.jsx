import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

export function DishView({data, pathname, quantity, updateFavorites, ...rest}) {
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

  return(
    <Container className={ pathname === "/check-out" ? `order-item` : ""} {...rest} >
      <img src={image} alt="Imagem do prato" />
      
      <div className="infos-action">
        <button className="dish-name"
          onClick={redirectToDishDetails}
        >
          { pathname === "/check-out" ? `${quantity} x ${data.name}` : data.name}
          { pathname === "/check-out" ? <span>{data.price}</span> : ""}
        </button>
        <button onClick={ pathname === "/check-out" ? () => removeFromCart([quantity, data]) : removeFavorite }>
          { pathname === "/check-out" ? "Excluir" : "Remover dos Favoritos" }
        </button>
      </div>
    </Container>
  );
};