import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Main } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {DishView} from "../../components/DishView";

export function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);

  function removeFromFavoriteData(id) {
    const updatedFavorites = favoritesData.filter(favorite => favorite.id !== id);
    setFavoritesData(updatedFavorites);
  };

  useEffect(() => {
    async function fetchFavorites() {
      const {data} = await api.get("/dishes/favorites");
      setFavoritesData(data);
    };
    fetchFavorites();
  }, []);
  
  return(
    <Container>
      <Header />

      <Main>
        <h2>Meus favoritos</h2>

        <div id="favorites-dishes-group">
          { favoritesData && favoritesData.map((data, index) => 
              <DishView key={index} data={data} updateFavorites={removeFromFavoriteData} />) 
          }
        </div>
      </Main>

      <Footer />
    </Container>
  );
};