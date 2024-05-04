import {BrowserRouter} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { api } from '../services/api';

import {AuthRoutes} from "./auth.routes";

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import {USER_ROLE} from "../utils/roles";
import { useEffect } from 'react';

export function Routes() {
  const {user, signOut} = useAuth();

  function AccessRoutes() {
    switch(user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    };
  };

  useEffect(() => {
    const userInserted = localStorage.getItem("@food-explorer:user");

    userInserted &&
    api.get("/users/validated", {withCredentials: true})
      .catch((error) => {
        if(error.response?.status === 401) {  
          signOut();
        };
      });
  }, []);

  return(
    <BrowserRouter>
      {user ? <AccessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};