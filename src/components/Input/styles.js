import {styled} from "styled-components";

export const Container = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
  }
  > img + input {
    padding-left: 4.2rem;
  }
  > img.hide-icon + input {
    padding-left: 1.4rem;
  }

  > .hide-icon {
    display: none;
  }
  `;

export const InputElement = styled.input`
  background-color: ${({theme}) => theme.DARK.DARK_900};
  border: none;
  border-radius: 8px;
  
  padding: 1.2rem 1.4rem;
  height: 4.8rem;

  width: 100%;
  
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  
  color: ${({theme}) => theme.LIGHT.LIGHT_100};
  
  &:placeholder-shown {
    color: ${({theme}) => theme.LIGHT.LIGHT_500};
  }
`;