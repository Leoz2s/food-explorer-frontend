import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

import { Container, Main } from './styles';
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {DishView} from "../../components/DishView";
import {Payment} from "../../components/Payment";
import {Footer} from "../../components/Footer";

export function CheckOut() {
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [mobileInitialStep, setMobileInitialStep] = useState(true);
  const [orderDescription, setOrderDescription] = useState("");

  const [LG_DEVICE, ] = DEVICE_BREAKPOINTS.LG.split("px");

  async function countTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
      const itemPrice = item[1].price.replace(",", ".");
      const [ , itemPriceString] = itemPrice.split("R$ ");
      const itemPriceNumber = Number(itemPriceString);
      totalPrice = totalPrice + itemPriceNumber;
    });

    totalPrice = `R$ ${totalPrice.toFixed(2)}`.replace(".", ",");
    return setTotalPrice(totalPrice);
  };

  function nextStep() {
    setMobileInitialStep(false);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("@food-explorer:cart");
    const allItems = JSON.parse(storedItems);
    setItems(allItems);

    let itemsOrderDescription = "";
    allItems.forEach(item => itemsOrderDescription = `${itemsOrderDescription} ${item[0]} x ${item[1].name},`);
    setOrderDescription(itemsOrderDescription.slice(0, -1));

    countTotalPrice();
  }, [totalPrice]);

  return(
    <Container>
      <Header updateItemsQuantity={totalPrice} />

      <Main>
        <div id="check-out-order"
          className={mobileInitialStep === false ? "hide" : ""}
        >
          <h2>Meu pedido</h2>

          { items && items.map((item, index) => (
            <DishView key={index} 
              data={item[1]}
              pathname={location.pathname}
              quantity={item[0]}
              cartChanged={[totalPrice, setTotalPrice]}
            />))
          }

          <p>{`Total: ${totalPrice}`}</p>
        </div>

        <Button className={mobileInitialStep === false ? "hide" : "mobile"} text="Avançar" 
          onClick={nextStep}
        />

        <div id="check-out-payment" className={window.innerWidth < LG_DEVICE && mobileInitialStep === true ? "hide" : ""}>
          <h2>Pagamento</h2>

          <Payment orderDescription={orderDescription} />
        </div>

      </Main>

      <Footer />
    </Container>
  );
};