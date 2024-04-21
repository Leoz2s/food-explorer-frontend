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
  }

  > .image-input input {
    display: none;
  }

  > .name-input, .price-input {
    input {
      width: 100%;
      background-color: ${({theme}) => theme.DARK.DARK_800};
    }
  }

  > .ingredients-input .ingredients-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;

    padding: .4rem .8rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};
    border-radius: 8px;

    div {
      background-color: ${({theme}) => theme.LIGHT.LIGHT_600};
    }
    div.isNew {
      background: none;
      width: fit-content;
    }

    div input {
      width: fit-content;
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

export const Select = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.LIGHT.LIGHT_400};

  #select-button {
    background-color: ${({theme}) => theme.DARK.DARK_900};  
    padding: 1.6rem;
    height: 5.4rem;
    border-radius: 8px;

    display: flex;
    padding: 0.75rem;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.375rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};
  }

  #chevrons img {
    width: 2rem;
    height: 2rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  #chevrons [src="/src/assets/icons/chevron-up.svg"] {
    display: none;
  }
  #options-view-button:focus + #select-button,
  #options-view-button:checked + #selected-button {
    outline: 1px solid ${({theme}) => theme.LIGHT.LIGHT_100};
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevrons {
    color: 1px solid ${({theme}) => theme.TINTS.CAKE_200};
  }

  #options-view-button:checked + #select-button #chevrons 
  [src="/src/assets/icons/chevron-down.svg"] {
    display: none;
  }
  #options-view-button:checked + #select-button #chevrons 
  [src="/src/assets/icons/chevron-up.svg"] {
    display: block;
  }

  #category-select {
    position: relative;
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  #options {
    margin-top: .25rem;

    border-radius: .375rem;
    border: 1px solid #252529;
    background: ${({theme}) => theme.DARK.DARK_200};

    display: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: .5rem;

    padding: .75rem;
    border-bottom: 1px solid #252529;

    position: relative;
  }

  .option label {
    color: #fbf9fe;
  }

  .option svg {
    width: 1rem;
    height: 1rem;
  }

  .option:has(input:checked),
  .option:hover {
    border-bottom: 1px solid #252529;
    background-color: ${({theme}) => theme.DARK.DARK_800};
  }

  .option:has(input:focus) {
    outline: 1px solid ${({theme}) => theme.TINTS.CAKE_200};
  }

  #category-select:has(#options-view-button:checked) + #options {
    display: block;
  }

  .select:has(.option input:checked) #category-select label {
    color: ${({theme}) => theme.TINTS.CAKE_200};
  }
  .select:has(.option input:checked) #selected-value {
    color: ${({theme}) => theme.LIGHT.LIGHT_100};
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