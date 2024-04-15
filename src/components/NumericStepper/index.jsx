import { useEffect, useState } from "react";

import { Container } from "./styles";

import MinusIcon from "../../assets/icons/Minus.svg";
import PlusIcon from "../../assets/icons/Plus.svg";

export function NumericStepper({amountvalue,...rest}) {
  const [amount, setAmount] = useState(1);

  function handleMinus() {
    setAmount(amount - 1);
  };

  function handlePlus() {
    setAmount(amount + 1);
  };

  useEffect(() => {
    if(amount < 0) {
      setAmount(0);
    } else if(amount > 99) {
      setAmount(99);
    };

    amountvalue(amount);
  }, [amount]);

  return(
    <Container {...rest} >
      <img src={MinusIcon} alt="Ícone de menos."
        onClick={handleMinus}
      />
      {
        amount < 10 ? amount.toString().padStart(2, '0') : amount
      }
      <img src={PlusIcon} alt="ícone de mais." 
        onClick={handlePlus}
      />
    </Container>
  );
};