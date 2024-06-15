import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "Header"
    "Main"
    "Footer";
  grid-template-rows: 11.4rem auto 7.7rem;
  height: 100vh;

  --status-width: 22.3rem;
  --code-width: 15.1rem;
  --details-width: 42.8rem;
  --date-width: 15.1rem;
`;

export const Main = styled.main`
  padding-top: 5.6rem;
  padding-left: 3.5rem;
  padding-bottom: 2rem;

  display: grid;
  align-content: baseline;
  justify-content: center;
  gap: 1.7rem;
  

  > h2 {
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-top: 3.4rem;
    padding-left: 7rem;
  }
`;

export const Circle = styled.div`
  width: .8rem;
  height: .8rem;
  background-color: ${({theme}) => theme.LIGHT.LIGHT_700};
  border-radius: 99px;

  &.red {
    background-color: ${({theme}) => theme.TINTS.TOMATO_300};
  }  
  &.yellow {
    background-color: ${({theme}) => theme.TINTS.CARROT_100};
  }
  &.green {
    background-color: ${({theme}) => theme.TINTS.MINT_100};
  }
`;

export const Table = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  
  width: calc(var(--status-width) var(--code-width) var(--details-width) var(--date-width));

  border: 2px solid ${({theme}) => theme.DARK.DARK_1000};
  border-radius: 8px;

  animation: translate-y-x 1.5s ease-in-out;
  @keyframes translate-y-x {
    0% {
      transform: translateY(5%);
      transform: translateX(-1.5%);
    }
  };

  > div:last-child {
    > div {
      border-bottom: 0;
    }
  }

  p {
    color: ${({theme}) => theme.LIGHT.LIGHT_400};
    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-areas:
    "status code details date";
  grid-template-columns: var(--status-width) var(--code-width) var(--details-width) var(--date-width);

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  > div:last-child {
    border-right: 0;
  }

  &.header {
    > div {
      padding-block: 1.6rem;
    }

    p {
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      font-family: Roboto;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 160%;
    }
  }
`;

export const TableCell = styled.div`
  display: flex;
  padding: .8rem 2.4rem;
  align-items: center;
  gap: .8rem;
  align-self: stretch;

  border-right: 2px solid ${({theme}) => theme.DARK.DARK_1000};
  border-bottom: 2px solid ${({theme}) => theme.DARK.DARK_1000};
`;