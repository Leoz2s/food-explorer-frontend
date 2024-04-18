import PlusIcon from "../../assets/icons/Plus.svg";

import { Container } from "./styles";

export function Tag({text, Icon, IconAlt, isNew, ...rest}) {
  return(
    <Container {...rest} >
      {text}
      {Icon && <img src={Icon} alt={IconAlt} />}
      {isNew && <img src={PlusIcon} alt="Add new ingredient" />}
    </Container>
  );
};