import {Routes, Route, Navigate} from 'react-router-dom';

import {SignUp} from "../pages/SignUp";
import {SignIn} from "../pages/SignIn";

export function AuthRoutes() {
  const user = localStorage.getItem("@food-explorer:user");

  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />

      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
};
