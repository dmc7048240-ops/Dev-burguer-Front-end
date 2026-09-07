import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";

import { Row } from "./row";
import { api } from "../../../services/api";
import { FilterOption, Filter } from "./styles";
import { orderStatusOptions } from "./orderStatus";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get("/orders");

        setOrders(data);
        setFilteredOrders(data);
      } catch (error) {
        console.error("Erro ao carregar pedidos:", error);
      }
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user?.name || "Cliente",
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products || [],
    };
  }

  function handleStatus(status) {
    setActiveStatus(status.id);

    // Todos
    if (status.id === 0) {
      setFilteredOrders(orders);
      return;
    }

    // Filtra pelo status
    const newOrders = orders.filter(
      (order) => order.status === status.value
    );

    setFilteredOrders(newOrders);
  }

  const rows = filteredOrders.map((order) => createData(order));

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">

          <TableHead>
            <TableRow>
              <TableCell />

              <TableCell>
                Pedido
              </TableCell>

              <TableCell>
                Cliente
              </TableCell>

              <TableCell>
                Data do Pedido
              </TableCell>

              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}