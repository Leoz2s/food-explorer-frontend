import styled from "styled-components";

export const Container = styled.header`
  padding-block: 5.6rem 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_700};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;

  .desktop, div.desktop img {
    display: none;
  }

  @media (min-width: 1000px) {
    gap: 3.2rem;

    .mobile {
      display: none;
    }
    .desktop{
      display: block;
    }

    > div input {
      min-width: 30rem;
      width: calc(28rem + 4vw);
      max-width: 58.1rem;
    }

    > button.desktop {
      display: flex;
      gap: .8rem;

      width: 21.6rem;
      border-radius: 5px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > h1 {
    display: flex;
    align-items: center;
    gap: .8rem;
    
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 2.1rem;

    cursor: pointer;
  }

  > span {
    font-size: 1.2rem;
    color: ${({theme}) => theme.TINTS.CAKE_100};
  }

  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
  }
`;

export const ReceiptWrapper = styled.div`
  position: relative;
    
  > .itens-amount {
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
`;