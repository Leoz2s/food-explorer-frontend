import {styled} from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

  animation: disappear_appear .5s ease-in-out;
  @keyframes disappear_appear {
    0% {
      opacity: 0;
    }
  }

  > button {
    width: fit-content;
  }
  > button img {
    width: 1.5rem;
    height: 1.5rem;
  }

  h2 {
    font-weight: 500;
    font-family: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > button {
      margin-top: 4rem;

      font-weight: 700;
      font-size: 2.4rem;
    }
    > button img {
      width: 2.8rem;
      height: 2.6rem;
    }
  };
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .input-wrap {
    display: grid;

    p {
      margin-bottom: 1.6rem;

      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }
  }
  
  > #buttons-group {
    display: flex;
    justify-content: center;
    gap: 3.2rem;

    button {
      justify-content: center;

      width: 100%;
      background-color: ${({theme}) => theme.TINTS.TOMATO_400};
      border-radius: 5px;
      opacity: 0.8;

      padding-inline: 2.4rem;
    }
    button:hover {
      opacity: 1;
    }
      
    button#delete-button {
      background-color: ${({theme}) => theme.DARK.DARK_800};
    }
  }
      
      
  > label, select, textarea {
    border: none;    
    
    &:placeholder-shown {
      color: ${({theme}) => theme.LIGHT.LIGHT_500};
    }
  }
    
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > #buttons-group {
      justify-content: flex-end;
      
      button {
        width: auto;
      }
    }
  }
`;

export const Image_Name_Category_Inputs = styled.div`
  display: grid;
  gap: 2.4rem;
  
  > .image-input input {
    display: none;
    }
    
    > .name-input {
      input {
        width: 100%;
        background-color: ${({theme}) => theme.DARK.DARK_800};
      }
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 3.2rem;
      
      --form-width: 90rem; // 105.6rem
      
      > .image-input {
        min-width: calc(0.2169 * var(--form-width)) ; // 22,9rem
      }
      > .name-input {
        min-width: calc(0.4384 * var(--form-width)); // 46,3rem
        width: 100%;
      }
      > .category-input {
        min-width: calc(0.3447 * var(--form-width)); // 36.4rem
        width: 100%;
      }
    }
  
  > div #select {
    --select-width: 100%;
    
    .select-button {
      background-color: ${({theme}) => theme.DARK.DARK_800};
      
      width: var(--select-width);
      border-radius: 5px;
    }
      
    .options-view-button:focus + .select-button,
    .options-view-button:checked + .selected-button {
        outline: 1px solid ${({theme}) => theme.LIGHT.LIGHT_100};
    }
    .options-list {
          width: var(--select-width);
    }
    
    .option {
      border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_200};
    }
    .option:has(input:checked),
    .option:hover {
      border: 1px solid ${({theme}) => theme.LIGHT.LIGHT_800};
      background-color: ${({theme}) => theme.DARK.DARK_900};
    }
    .option:has(input:focus) {
      outline: 1px solid ${({theme}) => theme.LIGHT.LIGHT_800};
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
  text-align: center;
  gap: .8rem;
`;

export const Ingredients_Price_Inputs = styled.div`
  display: grid;
  gap: 2.4rem;
  
  > .ingredients-input .ingredients-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;
    
    padding: .4rem .8rem;
    background-color: ${({theme}) => theme.DARK.DARK_800};
    border-radius: 8px;

    div {
      background-color: ${({theme}) => theme.LIGHT.LIGHT_600};
      border-radius: 8px;
    }
    div span {
      font-weight: 400;
    }
    div.isNew {
      background: none;
    }
    div input {
      width: 6.8rem;
      max-width: 10rem;
    }
  }

  > .price-input {
    input {
      background-color: ${({theme}) => theme.DARK.DARK_800};
    }
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    grid-template-areas: "Ingredients Price";
    grid-template-columns: 1fr 25.1rem;
    gap: 2.4rem;

    > .ingredients-input .ingredients-group {
      min-height: 4.8rem;

      div {
        padding: 1rem 1.6rem;
      }
    }

    > .price-input {
      min-width: 25.1rem;
      width: 100%;
    }
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