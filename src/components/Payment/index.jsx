import { useState } from 'react';

import { Container, TableRow, TableCell, CreditCardForm } from './styles';
import {Button} from "../Button";
import {Input} from "../Input";

import CreditCard from "../../assets/icons/CreditCard.svg";
import PIX from "../../assets/icons/PIX.svg";
import QrCode from "../../assets/images/qr-code.svg";
import Clock from "../../assets/icons/Clock.svg";
import CheckCircle from "../../assets/icons/CheckCircle.svg";
import ForkKnife from "../../assets/icons/ForkKnife.svg";

export function Payment({...rest}) {
  const methods = ["PIX", "CreditCard"];
  const steps = ["Payment-Method", "Waiting-Payment", "Payment-Approved", "Preparing-Order"];

  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [paymentStep, setPaymentStep] = useState("Payment-Method");

  function changePaymentMethod(method) {
    switch (method) {
      case "PIX":
        setPaymentMethod("PIX");
        break;
      case "CreditCard":
        setPaymentMethod("CreditCard");
        break;
      default:
        setPaymentMethod(methods[0]);
        break;
    };
  };

  function changePaymentSteps(step) {
    switch (step) {
      case "Payment-Method":
        setPaymentStep("Payment-Method");
        break;
      case "Waiting-Payment":
        setPaymentStep("Waiting-Payment");
        break;
      case "Payment-Approved":
        setPaymentStep("Payment-Approved");
        break;
      case "Preparing-Order":
        setPaymentStep("Preparing-Order");
        break;
      default:
        setPaymentStep(steps[0]);
        break;
    };
  };

  return(
    <Container {...rest}>
      <TableRow>
          <TableCell className={paymentMethod === "PIX" ? 'selected' : ''}
            onClick={e => changePaymentMethod("PIX")}
          >
            <img src={PIX} />
            <p>PIX</p>
          </TableCell>
          <TableCell className={paymentMethod === "CreditCard" ? 'selected' : ''}
            onClick={e => changePaymentMethod("CreditCard")}
          >
            <img src={CreditCard} />
            <p>Crédito</p>
          </TableCell>
      </TableRow>

      <div className={`QR-code ${paymentStep === "Payment-Method" && paymentMethod === "PIX" ? '' : 'hide'}`} >
        <img src={QrCode} alt="PIX QR code" />
      </div>

      <CreditCardForm className={paymentStep === "Payment-Method" && paymentMethod === "CreditCard" ? '' : 'hide'} >
        <div className="input-wrapper card-number">
          <p>Número do Cartão</p>
          <Input placeholder="0000 0000 0000 0000" maxLength="16" type="number" />
        </div>

        <div className="validity-CVC">
          <div className="input-wrapper" >
            <p>Validade</p>
            <Input placeholder="04/25" maxLength="5" />
          </div>
          <div className="input-wrapper" >
            <p>CVC</p>
            <Input placeholder="000" maxLength="3" type="number" />
          </div>
        </div>

        <Button type="button" text="Finalizar pagamento" />
      </CreditCardForm>

      <div className={`payment-process ${paymentStep === "Waiting-Payment" ? '' : 'hide'}`}>
        <img src={Clock} />
        <span>Aguardando pagamento...</span>
      </div>

      <div className={`payment-process ${paymentStep === "Payment-Approved" ? '' : 'hide'}`} >
        <img src={CheckCircle} />
        <span>Pagamento aprovado!</span>
      </div>

      <div className={`payment-process ${paymentStep === "Preparing-Order" ? '' : 'hide'}`} >
        <img src={ForkKnife} />
        <span>Pedido em preparo.</span>
      </div>
    </Container>
  );
};