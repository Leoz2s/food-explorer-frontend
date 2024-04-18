import { Routes, Route, Navigate } from "react-router-dom";

import {Home} from "../pages/Home";
import {Menu} from "../pages/Menu";
import {DishForm} from "../pages/DishForm";
import {Details} from "../pages/Details";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/new-dish" element={<DishForm />} />
      <Route path="/edit-dish/:id" element={<DishForm />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};