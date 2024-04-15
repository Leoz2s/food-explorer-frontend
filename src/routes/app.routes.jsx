import { Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home";
import {Menu} from "../pages/Menu";
import {NewDish} from "../pages/NewDish";
import {Details} from "../pages/Details";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/new-dish" element={<NewDish />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};