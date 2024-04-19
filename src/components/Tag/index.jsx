import PlusIcon from "../../assets/icons/Plus.svg";

import { Container } from "./styles";

export function Tag({text, Icon, IconAlt, isNew, onClick, placeholder, ...rest}) {
  return(
    <Container 
      className={isNew ? "isNew" : ""}
      {...rest} 
    >
      {!isNew && text}
      {isNew && <input type="text" placeholder={placeholder} />}

      { Icon && 
        <img 
          src={Icon} 
          alt={IconAlt} 
          onClick={onClick} 
        />
      }
      { isNew && 
        <img 
          src={PlusIcon} 
          alt="Adicionar o novo ingrediente" 
          onClick={onClick} 
        />
      }
    </Container>
  );
};