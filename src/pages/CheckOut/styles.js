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
`;

export const Main = styled.main`
  padding-left: 3.5rem;
  padding-top: 5.6rem;

  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 4.7rem;

    h2 {
      margin-bottom: 3.2rem;

      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      font-family: Poppins;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%; /* 44.8px */
    }

    &#check-out-order p {
      margin-top: 1.6rem;

      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%; /* 32px */
    }
  }

  > button {
    align-self: flex-start;
    
    width: 19.2rem;
    margin-left: 9.51rem;
  }

  > .hide {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: row;
    gap: 7.5rem;
    
    > .mobile {
      display: none;
    }
  }
`;