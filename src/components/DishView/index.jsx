import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container } from "./styles";

export function DishView({data, updateFavorites, ...rest}) {
  const navigate = useNavigate();
  const image = `${api.defaults.baseURL}/files/${data.image}`;

  function redirectToDishDetails() {
    navigate(`/details/${data.id}`)
  };

  async function removeFavorite() {
    await api.delete(`/dishes/${data.id}/favorites`);
    updateFavorites(data.id);
  };

  return(
    <Container {...rest} >
      <img src={image} alt="Imagem do prato" />
      
      <div className="infos-action">
        <button className="dish-name"
        onClick={redirectToDishDetails}>
          {data.name}
        </button>
        <button onClick={removeFavorite}>Remover dos Favoritos</button>
      </div>
    </Container>
  );
};