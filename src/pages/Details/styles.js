import {styled} from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas: 
    "Header"
    "Main"
    "Footer";
  grid-template-rows: 11.4rem auto 7.7rem;
`;

export const Main = styled.main`
  padding: 1.6rem 5.6rem 3.3rem;

  display: flex;
  flex-direction: column;

  justify-self: center;
  max-width: 76.8rem;

  > a {
    font-size: 2.4rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }

  > img {
    align-self: center;

    margin-block: 1.6rem;

    width: 26.4rem;
    height: 26.4rem;
  }

  > .dish-info {
    display: grid;
    justify-items: center;
    gap: 2.4rem;

    text-align: center;

    font-family: Poppins, sans-serif;
    h2 {
      font-weight: 500;
      font-size: 2.7rem;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }
    p {
      font-size: 1.6rem;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      line-height: 140%;
    }
    
    .ingredients-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.4rem;
    }
  } 

  > .action-group {
    margin-top: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    .edit-button {
      width: 100%;
      max-width: 31.6rem;
      
      justify-content: center;
    }
  }
`;