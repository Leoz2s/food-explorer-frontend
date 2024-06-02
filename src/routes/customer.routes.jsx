import { Routes, Route, Navigate } from "react-router-dom";

import {Home} from "../pages/Home";
import {Details} from "../pages/Details";
import {Favorites} from "../pages/Favorites";
import {OrderHistory} from "../pages/OrderHistory";
import {CheckOut} from "../pages/CheckOut";

export function CustomerRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/check-out" element={<OrderHistory />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};