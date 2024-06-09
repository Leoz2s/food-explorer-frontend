import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext({});

import {api} from "../services/api";

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {
    try{
      const response = await api.post("/sessions", {email, password}, {withCredentials: true});
      const {user} = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      setData({user});

      localStorage.setItem("@food-explorer:cart", JSON.stringify([]));

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
    setData({});

    localStorage.removeItem("@food-explorer:cart");
  };

  function addToCart(item) {
    const storedItems = localStorage.getItem("@food-explorer:cart");
    const previousItems = JSON.parse(storedItems);
    const allItems = [...previousItems, item];
    localStorage.setItem("@food-explorer:cart", JSON.stringify(allItems));
  };
  function removeFromCart(itemToRemove) {
    const storedItems = localStorage.getItem("@food-explorer:cart");
    const previousItems = JSON.parse(storedItems);
    const allItems = previousItems.filter(item => (item[1].id != itemToRemove[1].id));
    localStorage.setItem("@food-explorer:cart", JSON.stringify(allItems));
  };

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if(user) {
      setData({user: JSON.parse(user)});
    };
  }, []);

  return(
    <AuthContext.Provider value={{
        signIn, 
        user: data.user,
        signOut,
        addToCart, removeFromCart,
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

