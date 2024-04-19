import SelectArrowIcon from "../../assets/icons/chevron-down.svg";

import {styled} from 'styled-components';

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
  padding: 1rem 3.2rem 5.3rem ;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  font-family: Poppins, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  a img {
    width: 1.5rem;
    height: 1.5rem;
  }

  h2 {
    font-weight: 500;
    font-family: 3.2rem;
  }
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .input-wrap {
    display: grid;

    p {
      margin-bottom: 1.6rem;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }
    input {
      width: 100%;
      background-color: ${({theme}) => theme.DARK.DARK_800};
    }
  }

  > .image-input input {
    display: none;
  }

  > .ingredients-input .ingredients-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;

    padding: .4rem .8rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};
    border-radius: 8px;

    span {
      background-color: ${({theme}) => theme.LIGHT.LIGHT_600};
      border-radius: 8px;
      font-weight: 400;
    }
    span.isNew {
      border: 1px dashed ${({theme}) => theme.LIGHT.LIGHT_500};
      border-radius: 8px;
      background: none;
    }
  }
  
  > button {
    justify-content: center;
    background-color: ${({theme}) => theme.TINTS.TOMATO_400};
    border-radius: 5px;
    opacity: 0.8;
  }
  > button:hover {
    opacity: 1;
  }

  > label, select, textarea {
    border: none;    

    &:placeholder-shown {
      color: ${({theme}) => theme.LIGHT.LIGHT_500};
    }
  }
`;

export const Label = styled.label`
  background-color: ${({theme}) => theme.DARK.DARK_800};  
  padding: 1.2rem 3.2rem;
  height: 4.8rem;
  border-radius: 8px;
  
  font-family: Poppins, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({theme}) => theme.LIGHT.LIGHT_100};

  display: flex;
  align-items: center;
  gap: .8rem;
`;

export const Select = styled.select`
  background-color: ${({theme}) => theme.DARK.DARK_900};  
  padding: 1.6rem;
  height: 5.4rem;
  border-radius: 5px;
  
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};

  &::-webkit-select-arrow {
    background-image: url(${SelectArrowIcon});
  }
`;

export const Textarea = styled.textarea`
  background-color: ${({theme}) => theme.DARK.DARK_800};  
  padding: 1.4rem;
  height: 17.2rem;
  resize: none;
  border-radius: 8px;

  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_100};
`;