import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';

import {Container, Message, Main} from "./styles";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Footer} from "../../components/Footer";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";
import CaretRightIcon from "../../assets/icons/CaretRight.svg";

import message_image from "../../assets/images/message-image.png";
import desktop_message_image from "../../assets/images/desktop-message-image.png";
import dish_mask from "../../assets/images/dishes-and-drinks-mask-group/0-Dish.png"
import dish_mask_1 from "../../assets/images/dishes-and-drinks-mask-group/1-Dish.png"
import dish_mask_2 from "../../assets/images/dishes-and-drinks-mask-group/2-Dish.png"
import { useAuth } from "../../hooks/auth";

export function Home() {
  const navigate = useNavigate();
  const {user} = useAuth();

  const [dishes, setDishes] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [sliderSize, setSliderSize] = useState(2);

  const role = user.role;

  const SplideConfig = {
    perPage: sliderSize,
    autoWidth: true,
    // gap    : '-4rem',

    // breakpoints: {
    //   1000: {
    //     perPage: 4,
    //   },
    // },
  };

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=&ingredients=`);
      setDishes(response.data);
    };
    fetchDishes();

    setFavorites(
      {id: 6,},
    );

    function handleResize() {
      if(window.innerWidth < 450) {
        setSliderSize(1);
      }else if(window.innerWidth < 675) {
        setSliderSize(2);
      }else if(window.innerWidth < 800) {
        setSliderSize(3);
      }else if(window.innerWidth > 900){
        setSliderSize(4);
      };
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <Container >
      <Header />

      <Main>
        <Message>
          <img className="mobile" src={message_image} alt="Food image" />
          <img className="desktop" src={desktop_message_image} alt="Food image" />
          <div id="message-content">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Message>

        <h3>Refeições</h3>
        <div className="dishes-group">
          <Splide tag="section" hasTrack={false} aria-label="Meals" options={SplideConfig}>
            <SplideTrack>
              {
                dishes.map((dish, index) => (
                  <SplideSlide key={index}>
                    { dish.category == "Refeição" &&
                      <Card key={dish.id} data={dish} favorites={favorites} />
                    }
                  </SplideSlide>
                ))
              }
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <img src={CaretLeftIcon} alt="Left" />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <img src={CaretRightIcon} alt="Right" />
              </button>
            </div>
          </Splide>
        </div>

        <h3>Sobremesas</h3>
        <div className="dishes-group">
          <Splide tag="section" hasTrack={false} aria-label="Desserts" options={SplideConfig}>
            <SplideTrack>
            {
              dishes.map((dish, index) => (
                <SplideSlide key={index}>
                    { dish.category == "Sobremesa" &&
                      <Card key={dish.id} data={dish} favorites={favorites} />
                    }
                </SplideSlide>
              ))
            }
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <img src={CaretLeftIcon} alt="Left" />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <img src={CaretRightIcon} alt="Right" />
              </button>
            </div>
          </Splide>
        </div>

        <h3>Bebidas</h3>
        <div className="dishes-group">
          <Splide tag="section" hasTrack={false} aria-label="Drinks" options={SplideConfig}>
            <SplideTrack>
            {
              dishes.map((dish, index) => (
                <SplideSlide key={index}>
                  { dish.category == "Bebida" &&
                    <Card key={dish.id} data={dish} favorites={favorites} />
                  }
                </SplideSlide>
              ))
            }
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <img src={CaretLeftIcon} alt="Left" />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <img src={CaretRightIcon} alt="Right" />
              </button>
            </div>
          </Splide>
        </div>
        
      </Main>
      

      <Footer />
    </Container>
  );
};