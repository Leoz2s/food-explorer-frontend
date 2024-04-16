import { useState } from "react";
import { Container, InputElement } from "./styles";

export function Input({Icon, ...rest}) {
  const [inputValue, setInputValue] = useState("");

  return(
    <Container >
      { Icon && <img 
          src={Icon} 
          className={inputValue === "" ? "" : "hide-icon"}
        />
      }
      <InputElement 
        onChange={e => setInputValue(e.target.value)} 
        {...rest}
      />
    </Container>
  );
};