import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {Container, Message} from "./styles";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Footer} from "../../components/Footer";

import message_image from "../../assets/images/message-image.png";
import dish_mask from "../../assets/images/dishes-and-drinks-mask-group/0-Dish.png"
import dish_mask_1 from "../../assets/images/dishes-and-drinks-mask-group/1-Dish.png"
import dish_mask_2 from "../../assets/images/dishes-and-drinks-mask-group/2-Dish.png"

export function Home() {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    setDishes(
      [{
        id: 1,
        image: `${dish_mask}`,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        role: "user",
      },
      {
        id: 2,
        image: `${dish_mask_1}`,
        name: "Spaguetti Gambe",
        price: "R$ 79,97",
        role: "user",
      },
      {
        id: 3,
        image: `${dish_mask_2}`,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        role: "user",
      },
    ]);
    setFavorites(
      {
        id: 1,
        name: "Salada Ravanello",
        price: "R$ 49,97",
      },
    );
    return;
  }, []);

  return(
    <Container >
      <Header />

      <main>
        <Message>
          <img src={message_image} alt="Food image" />
          <div id="message-content">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Message>

        <h3>Refeições</h3>
        <div className="dishes-group">
          {
            dishes.map(dish => (
              <Card key={dish.id} data={dish} favorites={favorites} />
            ))
          }
        </div>

        <h3>Sobremesas</h3>
        <div className="dishes-group">
          {
            dishes.map(dish => (
              <Card key={dish.id} data={dish} favorites={favorites} />
            ))
          }
        </div>

        <h3>Bebidas</h3>
        <div className="dishes-group">
          {
            dishes.map(dish => (
              <Card key={dish.id} data={dish} favorites={favorites} />
            ))
          }
        </div>
      </main>

      <Footer />
    </Container>
  );
};