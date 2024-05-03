import {styled} from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas: 
    "Header"
    "Main"
    "Footer";
  grid-template-rows: 11.4rem auto 7.7rem;
`;

export const Main = styled.main`
  padding: 1.6rem 5.6rem 3.3rem;

  display: flex;
  flex-direction: column;

  justify-self: center;
  max-width: 76.8rem;

  > button {
    font-size: 2.4rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    width: fit-content;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: fit-content;
  }
`;

export const Dish = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    align-self: center;

    margin-block: 1.6rem;

    width: 26.4rem;
    height: 26.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 4.7rem;
  }
`;

export const DishInfosAndActions = styled.div`
  > .dish-info {
    display: grid;
    justify-items: center;
    gap: 2.4rem;

    text-align: center;

    font-family: Poppins, sans-serif;
    h2 {
      font-weight: 500;
      font-size: 2.7rem;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }
    p {
      font-size: 1.6rem;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      line-height: 140%;
    }
    
    .ingredients-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.4rem;
    }
  } 

  > .action-group {
    margin-top: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    .edit-button {
      width: 100%;
      max-width: 31.6rem;
      
      justify-content: center;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    justify-items: flex-start;

    > .dish-info {
      justify-items: flex-start;

      h2 {
        font-family: Poppins;
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
      }
      p {
        font-family: Poppins;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 140%; 

        text-align: start;
      }
    }
  }
`;