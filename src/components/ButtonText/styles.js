import {styled} from 'styled-components';

export const Container = styled.a`
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.4rem;

  color: ${({theme}) => theme.LIGHT.LIGHT_100};

  outline-width: .1rem;
  outline-color: ${({theme}) => theme.LIGHT.LIGHT_100};
`;