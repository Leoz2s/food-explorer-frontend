import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  
  --table-width: 35.5rem;
  width: var(--table-width);
  background-color: ${({theme}) => theme.DARK.DARK_200};

  border: 2px solid ${({theme}) => theme.DARK.DARK_1000};
  border-radius: 8px;

  p {
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
    font-family: Roboto;
    font-size: 1.6rem;
  }

  > .QR-code {
    padding-block: 3.1rem;
  }

  > .payment-process {
    padding-block: 11.3rem;

    display: grid;
    justify-items: center;
    gap: 2.4rem;

    img {
      width: 96px;
      height: 96px;
    }
    
    span {
      color: ${({theme}) => theme.LIGHT.LIGHT_400};
      text-align: center;

      /* Roboto/Big bold */
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 32px */
    }
  }

  .hide {
    display: none;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-areas:
    "PIX CreditCard";
  align-self: flex-start;

  > button:first-child {
    border-right: 2px solid ${({theme}) => theme.DARK.DARK_1000};
    border-bottom: 2px solid ${({theme}) => theme.DARK.DARK_1000};
    border-top-left-radius: 6px;
  }
  > button:last-child {
    border-bottom: 2px solid ${({theme}) => theme.DARK.DARK_1000};
    border-top-right-radius: 6px;
  }
`;

export const TableCell = styled.button`
  padding: 1.2rem 1.4rem;
  height: 8.1rem;
  width: calc((var(--table-width) /2) - .16rem);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  &.selected {
    background-color: ${({theme}) => theme.DARK.DARK_800};
  }
`;

export const CreditCardForm = styled.form`
  padding: 5.7rem 2.6rem;

  display: grid;
  gap: 3.7rem;

  .input-wrapper {
    display: grid;
    gap: .8rem;

    > div input {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.4rem;

      height: 4.8rem;
      padding: 1.2rem 1.4rem;
      background-color: ${({theme}) => theme.DARK.DARK_200};

      border-radius: 5px;
      border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_500};

      font-family: Roboto;
      font-size: 1.6rem;
      line-height: 100%; /* 16px */
      
      &:focus {
        border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_100};
      }
      
      &::placeholder {
        color: ${({theme}) => theme.LIGHT.LIGHT_500};
      }
    }
  }

  > .validity-CVC {
    display: flex;
    gap: 1.7rem;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: .8rem;
    
    padding: 1.2rem 3.2rem;
    background-color: ${({theme}) => theme.TINTS.TOMATO_100};
    border-radius: 5px;

    color: ${({theme}) => theme.LIGHT.LIGHT_100};
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem; /* 171.429% */
  }
`;