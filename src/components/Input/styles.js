import {styled} from "styled-components";

export const Container = styled.input`
  background-color: ${({theme}) => theme.DARK.DARK_900};
  border: none;
  border-radius: 8px;

  padding: 1.2rem 1.4rem;
  height: 4.8rem;

  font-family: Roboto, sans-serif;
  font-size: 1.6rem;

  color: ${({theme}) => theme.LIGHT.LIGHT_100};

  :placeholder-shown {
    color: ${({theme}) => theme.LIGHT.LIGHT_500};
  }
`;