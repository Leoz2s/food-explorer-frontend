import { Routes, Route, Navigate } from "react-router-dom";

import {Home} from "../pages/Home";
import {Details} from "../pages/Details";

export function CustomerRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};