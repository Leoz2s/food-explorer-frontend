import PlusIcon from "../../assets/icons/Plus.svg";

import { Container } from "./styles";

export function Tag({value, isNew, placeholder, onClick, Icon, IconAlt, ...rest}) {
  return(
    <Container className={isNew ? "isNew" : ""}>
      { isNew &&
        <input 
          type="text"
          placeholder={placeholder} 
          value={value} 
          readOnly={!isNew}
          {...rest}
        />
      }
      { !isNew &&
        <span>{value}</span>
      }

      { (isNew || Icon) && 
        <button type="button" onClick={onClick}>
          <img 
            src={isNew ? PlusIcon : Icon} 
            alt={isNew ? "Adicionar o novo ingrediente" : IconAlt} 
            value={value}
          />
        </button>
      }
    </Container>
  );
};