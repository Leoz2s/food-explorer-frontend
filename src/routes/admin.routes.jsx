import { Routes, Route, Navigate } from "react-router-dom";

import {Home} from "../pages/Home";
import {DishForm} from "../pages/DishForm";
import {Details} from "../pages/Details";
import {Favorites} from "../pages/Favorites";
import {OrderHistory} from "../pages/OrderHistory";

export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-dish" element={<DishForm />} />
      <Route path="/edit-dish/:id" element={<DishForm />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/orders" element={<OrderHistory />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};