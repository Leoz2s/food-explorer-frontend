import { useState } from "react";
import { Container, InputElement } from "./styles";

import SearchIcon from "../../assets/icons/Search.svg";

export function Input({Icon, isSearch, className, ...rest}) {
  const [inputValue, setInputValue] = useState("");

  return(
    <Container className={className} >
      { Icon && 
        <img src={Icon} 
          className={inputValue === "" ? "" : "hide-icon"}
        />
        ||
        isSearch &&
        <img src={SearchIcon} />
      }
      
      <InputElement 
        onChange={e => setInputValue(e.target.value)}
        {...rest}
      />
    </Container>
  );
};