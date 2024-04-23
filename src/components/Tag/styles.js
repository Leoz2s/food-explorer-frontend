import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.DARK.DARK_1000};
  padding: .4rem .8rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: .8rem;
  
  > input, span {
    background: transparent;
    border: none;

    width: fit-content;

    font-weight: 500;
    font-size: 1.4rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_100};

    &::placeholder {
      color: ${({theme}) => theme.LIGHT.LIGHT_500};
    }
  }
  
  > button img {
    width: .8rem;
    height: .8rem;

    cursor: pointer;
  }
  
  &.isNew {
    border: 1px dashed ${({theme}) => theme.LIGHT.LIGHT_500};
    border-radius: 8px;
    background: none;
  }
`;