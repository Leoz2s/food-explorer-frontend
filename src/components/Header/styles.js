import styled from "styled-components";

export const Container = styled.header`
  padding-block: 5.6rem 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_700};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;
  
  > h1 {
    display: flex;
    align-items: center;
    gap: .8rem;
    
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 2.1rem;
  }
  
  > .receipt-wrapper {
    position: relative;
    
    .itens-amount {
      position: absolute;
      bottom: 1.8rem;
      left: 1.8rem;

      background-color: ${({theme}) => theme.TINTS.TOMATO_100};
      --size: 2rem;
      width: var(--size);
      height: var(--size);
      border-radius: 99px;

      font-size: 1.4rem;
      font-family: Poppins, sans-serif;
      font-weight: 500;
      text-align: center;
    }
  }
`;