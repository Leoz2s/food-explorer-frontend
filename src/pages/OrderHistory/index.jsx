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
  function formatDate(date) {
    const [dateNumbers, hoursNumbers] = date.split(" ");
    const [year, month, day] = dateNumbers.split("-");
    const [hours, minutes, seconds] = hoursNumbers.split(":");

    let timeZoneHours;
    if(hours == 2) {timeZoneHours = 23;}
      else if(hours == 1) {timeZoneHours = 22;}
      else if(hours == 0) {timeZoneHours = 21;}
      else {timeZoneHours = (Number(hours) - 3);};

    return `${day}/${month} às ${timeZoneHours}h${minutes}`;
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
      let {data} = await api.get("/orders");

      const newIds = data.map(order => `${order.id}`.padStart(6, "0"));
      const newDates = data.map(order => formatDate(order.created_at));
      data.forEach((order, index) => {
        order.id = newIds[index];
        order.created_at = newDates[index];
      });

      setOrdersData(data);
    };
    fetchOrders();
  }, []);
  
  return(
    <Container>
      <Header />

      <Main>
        { window.innerWidth < 1000 && <h2>Pedidos</h2>}
        { window.innerWidth < 1000 && OrdersData && 
          isAdmin == false &&
          OrdersData.map((order, index) => (
            <Order key={index} data={order} Circle={ColoredCircle(translateStatus(order.status))} 
              CurrentOption={translateStatus(order.status)} />
          ))
          ||
          window.innerWidth < 1000 && OrdersData && 
          isAdmin == true &&
          OrdersData.map((order, index) => (
            <Order key={index} data={order} Circle={ColoredCircle} 
              CurrentOption={translateStatus(order.status)} OptionsToSelect={["Pendente", "Preparando", "Entregue"]} 
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
                        CurrentOption={translateStatus(order.status)} OptionsToSelect={["Pendente", "Preparando", "Entregue"]} 
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