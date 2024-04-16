import {styled} from 'styled-components';

export const Container = styled.div`
  > footer {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export const Header = styled.header`
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_700};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
  h1 {
    font-weight: 400;
  }
`;

export const Main = styled.main`
  padding: 3.6rem 2.8rem 1.3rem;

  input {
    width: 100%;
    margin-bottom: 3.6rem;
  }
`;

export const MenuItem = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 140%;
  color: ${({theme}) => theme.LIGHT.LIGHT_300};

  > p {
    padding: 1rem;
    
    border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_1000};
  }
`;