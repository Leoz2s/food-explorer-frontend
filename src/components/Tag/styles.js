import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({theme}) => theme.DARK.DARK_1000};
  padding: .4rem .8rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: .8rem;

  img {
    width: .8rem;
    height: .8rem;

    cursor: pointer;
  }

  &.isNew {
    border: 1px dashed ${({theme}) => theme.LIGHT.LIGHT_500};
    border-radius: 8px;
    background: none;
    color: ${({theme}) => theme.LIGHT.LIGHT_500};

    input {
      border: none;
      width: 6rem;
      color: ${({theme}) => theme.LIGHT.LIGHT_100};
    }
  }
`;