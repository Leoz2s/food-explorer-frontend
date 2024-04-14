import {styled} from 'styled-components';

export const Container = styled.button`
  border: none;
  border-radius: 8px;

  padding: 1.2rem 3.2rem;
  background-color: ${({theme}) => theme.TINTS.TOMATO_100};

  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({theme}) => theme.LIGHT.LIGHT_100};
`;