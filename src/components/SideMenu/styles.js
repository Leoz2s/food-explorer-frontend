import {styled} from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({theme}) => theme.DARK.DARK_400};
    display: block;
    grid-area: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }

  > footer {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export const Header = styled.header`
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_700};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
  h1 {
    font-weight: 400;
  }
`;

export const Main = styled.main`
  padding: 3.6rem 2.8rem 1.3rem;

  input {
    width: 100%;
    margin-bottom: 3.6rem;
  }
`;

export const MenuItem = styled.div`
  > button {
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    width: 100%;
    text-align: left;
    
    p {
      padding: 1rem;
      
      border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_1000};
    }
  }

`;