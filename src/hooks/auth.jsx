import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext({});

import {api} from "../services/api";

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {
    try{
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});

    }catch(error){
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert("Não foi possível fazer Login.");
      };
    };
  };

  function signOut() {
    localStorage.removeItem("@food-explorer:user");
    localStorage.removeItem("@food-explorer:token");
    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    const token = localStorage.getItem("@food-explorer:token");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({token, user: JSON.parse(user)});
    };
  }, []);

  return(
    <AuthContext.Provider value={{
        signIn, 
        user: data.user,
        signOut
      }}>
      
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
};

export {AuthProvider, useAuth};

