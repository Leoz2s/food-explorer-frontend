import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    background-color: ${({theme}) => theme.DARK.DARK_400};
  }

  a, button {
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
    text-decoration: none;
    
    background: none;
    border: none;
    cursor: pointer;
  }
`;