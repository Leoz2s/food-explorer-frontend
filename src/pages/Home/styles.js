import {styled} from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  height: 100vh;
  display: grid;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  grid-template-rows: 11.4rem auto 7.7rem;
`;

export const Message = styled.div`
  margin-block: 4.4rem 6.2rem;

  background-image: ${({theme}) => theme.GRADIENTS.GRADIENT_200};
  width: 34.6rem;
  height: 12rem;
  
  display: flex;
  justify-content: flex-end;
  margin-inline: auto;

  position: relative;
  
  > img {
    width: 19.1rem;
    height: 14.9rem;

    position: absolute;
    top: -3rem;
    left: -3.4rem;
  }

  > #message-content {
    margin-top: 3.6rem;
    margin-left: 14.1rem;

    font-family: Poppins, sans-serif;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
    line-height: 130%;

    width: 29.5rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .desktop {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 11.4rem;

    width: calc(70rem + 10vw);
    max-width: 112rem;
    height: calc(12.5rem + 8vw);
    max-height: 26rem;

    border-radius: 8px;

    > .mobile {
      display: none;
    }
    > .desktop {
      display: block;
    }

    > img {
      width: calc(30rem + 10vw);
      max-width: 63.2rem;
      height: calc(20rem + 8vw);
      max-height: 40.6rem;

      top: calc(-7.5rem - 0.1vw);
    }

    > #message-content {
      margin-top: 0;
      margin-right: 4.1rem;

      align-self: center;

      width: 42.2rem;

      h2 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%; /* 56px */
      }
      p {
        font-family: Roboto;
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin-top: 16.4rem;

    width: 112rem;
    height: 26rem;

    > img {
      width: 61.2rem;
      height: 40.6rem;

      top: -14.5rem;
    }
  }
`;

export const Main = styled.main`
  display: grid;
  justify-content: center;

  padding-left: 2.4rem;

  > .dishes-group {
    margin-block: 2.4rem;

    display: flex;
    gap: 1.6rem;

    overflow-x: hidden;

    section {
      max-width: 100vw;

      .splide__arrows {
        display: none;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > .dishes-group {
      > div {
        width: 25.6rem;
        height: 41.1rem;

        padding: 2.4rem;
        border-radius: 8px;
      }

      section {
        .splide__arrows {
          display: grid;
        }
        .splide__arrow {
          height: 8.2rem;
          /* width: 4rem; */
          /* background-image: ${({theme}) => theme.GRADIENTS.GRADIENT_100}; */
        }
        .splide__arrow--prev {          
          justify-content: left;
          /* width: 18rem; */
        }
        .splide__arrow--next {
          justify-content: left;
          /* width: 18rem; */
        }
      }
    }
  }
`;