import { useEffect, useState } from "react";

import { Container, Main, Circle, Table, TableRow, TableCell } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Order} from "../../components/Order";

export function OrderHistory() {
  const [OrdersData, setOrdersData] = useState([
    {
      code: "000004",
      status: "Pendente",
      details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      date: "20/05 às 18h00",
    },
    {
      code: "000003",
      status: "Preparando",
      details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      date: "20/05 às 18h00",
    },
    {
      code: "000002",
      status: "Entregue",
      details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      date: "20/05 às 18h00",
    },
    {
      code: "000001",
      status: "Entregue",
      details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      date: "20/05 às 18h00",
    },
  ]);

  function ColoredCircle(status) {
    switch (status) {
      case "Pendente":
        return <Circle className="red" />
      case "Preparando":
        return <Circle className="yellow" />
      case "Entregue":
        return <Circle className="green" />
      default:
        return <Circle />
    };
  };

  useEffect(() => {

  }, []);
  
  return(
    <Container>
      <Header />

      <Main>
        { window.innerWidth < 1000 && <h2>Pedidos</h2>}
        { window.innerWidth < 1000 && OrdersData && 
            OrdersData.map((order, index) => {
              return <Order key={index} data={order} Circle={ColoredCircle(order.status)} />
            })
        }

        { window.innerWidth >= 1000 && <h2>Histórico de pedidos</h2>}
        { window.innerWidth >= 1000 && 

          <Table>
            <TableRow className="header">
              <TableCell><p>Status</p></TableCell>
              <TableCell><p>Código</p></TableCell>
              <TableCell><p>Detalhamento</p></TableCell>
              <TableCell><p>Data e hora</p></TableCell>
            </TableRow>
            { OrdersData && OrdersData.map((order, index) => (
                <TableRow key={index} >
                  <TableCell>{ColoredCircle(order.status)}<p>{order.status}</p></TableCell>
                  <TableCell><p>{order.code}</p></TableCell>
                  <TableCell><p>{order.details}</p></TableCell>
                  <TableCell><p>{order.date}</p></TableCell>
                </TableRow>
              ))
            }
          </Table>
        }
      </Main>

      <Footer />
    </Container>
  );
};