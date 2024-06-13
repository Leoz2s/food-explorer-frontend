import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Main, Circle, Table, TableRow, TableCell } from "./styles";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Order} from "../../components/Order";
import {Select} from "../../components/Select";

export function OrderHistory() {
  const {user} = useAuth();
  const [OrdersData, setOrdersData] = useState([]);

  const isAdmin = user.role === "admin";

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

  function translateStatus(status) {
    switch (status) {
      case "pending":
        return "Pendente";
      case "preparing":
        return "Preparando"
      case "delivered":
        return "Entregue";
      default:
        return "Pendente";
    };
  };
  function formatCode(code) {

  };
  function formatDate(date) {
    
  };

  async function handleUpdateStatus(order_id, status) {
    try {
      await api.patch(`/orders/${order_id}`, {status});
    } catch (error) {
      console.error(error.message);
    };
  };

  useEffect(() => {
    async function fetchOrders() {
      const orders = await api.get("/orders");
      setOrdersData(orders.data);
    };
    fetchOrders();

    // setOrdersData([
    //   {
    //     id: "000004",
    //     status: "Pendente",
    //     description: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    //     created_at: "20/05 às 18h00",
    //   },
    //   {
    //     id: "000003",
    //     status: "Preparando",
    //     description: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    //     created_at: "20/05 às 18h00",
    //   },
    //   {
    //     id: "000002",
    //     status: "Entregue",
    //     description: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    //     created_at: "20/05 às 18h00",
    //   },
    //   {
    //     id: "000001",
    //     status: "Entregue",
    //     description: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    //     created_at: "20/05 às 18h00",
    //   },
    // ]);

  }, []);
  
  return(
    <Container>
      <Header />

      <Main>
        { window.innerWidth < 1000 && <h2>Pedidos</h2>}
        { window.innerWidth < 1000 && OrdersData && 
          isAdmin == false &&
          OrdersData.map((order, index) => (
            <Order key={index} data={order} Circle={ColoredCircle(order.status)} />
          ))
          ||
          window.innerWidth < 1000 && OrdersData && 
          isAdmin == true &&
          OrdersData.map((order, index) => (
            <Order key={index} data={order} Circle={ColoredCircle} 
              CurrentOption={order.status} OptionsToSelect={["Pendente", "Preparando", "Entregue"]} 
              onSelect={handleUpdateStatus}
            />
          ))
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
                  { isAdmin == false &&
                    <TableCell>{ColoredCircle(translateStatus(order.status))}<p>{translateStatus(order.status)}</p></TableCell>
                    ||
                    isAdmin == true && 
                    <TableCell>
                      <Select Circle={ColoredCircle} Id={order.id}
                        CurrentOption={() => translateStatus(order.status)} OptionsToSelect={["Pendente", "Preparando", "Entregue"]} 
                        onSelect={handleUpdateStatus}
                      /> 
                    </TableCell>
                  }
                  <TableCell><p>{order.id}</p></TableCell>
                  <TableCell><p>{order.description}</p></TableCell>
                  <TableCell><p>{order.created_at}</p></TableCell>
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