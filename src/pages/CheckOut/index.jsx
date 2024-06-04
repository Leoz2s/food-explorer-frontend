import { useEffect, useState } from 'react';

import { Container, Main } from './styles';
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {DishView} from "../../components/DishView";
import {Payment} from "../../components/Payment";
import {Footer} from "../../components/Footer";

export function CheckOut() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData();
  }, []);

  return(
    <Container>
      <Header />

      <Main>
        <div id="check-out-order">
          <h2>Meu pedido</h2>

          {/* <DishView /> */}

          <p>{`Total: ${data}`}</p>
        </div>

        <Button className="mobile" text="Avançar" />

        <div id="check-out-payment">
          <h2>Pagamento</h2>

          <Payment />
        </div>

      </Main>

      <Footer />
    </Container>
  );
};