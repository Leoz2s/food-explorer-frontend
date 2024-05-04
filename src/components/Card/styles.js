import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_200};
  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 8px;

  display: grid;
  justify-items: center;
  align-content: center;
  gap: 1.2rem;
  
  flex-shrink: 0;

  position: relative;

  .desktop {
    display: none;
  }

  > .action-icon {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    cursor: pointer;
  }

  > .dish-image {
    --image-size: 8.8rem;
    height: var(--image-size);
    width: var(--image-size);
  }

  h3 {
    cursor: pointer;
    width: fit-content;
    text-align: center;

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    display: flex;
    align-items: center;
    gap: .7rem;

    img {
      width: .5rem;
      height: .8rem;
    }
  }

  > span {
    color: ${({theme}) => theme.TINTS.CAKE_100}
  }

  > .stepper-button {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    align-items: center;
    
    > button:last-child {
      width: 16.2rem;
      height: 3.2rem;
      padding: 1.2rem 2.4rem;
  
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 30.4rem;
    height: 46.2rem;

    gap: 1.5rem;

    .desktop {
      display: block;
    }

    > .dish-image {
      --image-size: 17.6rem;
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 700;

      img {
        width: 1rem;
        height: 1.3rem;
      }
    }

    > p {
      color: var(--Light-Light-400, #C4C4CC);
      text-align: center;

      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
    }

    > span {
      font-family: Roboto;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 51.2px */
    }

    > .stepper-button {
      flex-direction: row;

      > button:last-child {
        width: 9.2rem;
        height: 4.8rem;
      }
    }
  }
`;