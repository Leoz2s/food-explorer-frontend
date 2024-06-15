import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "Header"
    "Main"
    "Footer";
  grid-template-rows: 11.4rem auto 7.7rem;
  height: 100vh;
`;

export const Main = styled.main`
  justify-self: left;

  padding-top: 5.6rem;
  padding-left: 3.5rem;

  animation: opacity-0-1 1s ease-in-out;
  @keyframes opacity-0-1 {
    0% {
      opacity: 0;
      transform: translateY(5%);
    }
    100% {
      opacity: 1;
    }
  };

  > #favorites-dishes-group {
    width: fit-content;
  }

  > h2 {
    width: fit-content;

    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > #favorites-dishes-group {
      display: flex;
      flex-wrap: wrap;
      column-gap: 3.2rem;
      row-gap: 4.8rem;
    }
  }
`;