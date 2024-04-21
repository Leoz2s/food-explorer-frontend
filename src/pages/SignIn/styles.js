import {styled} from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  
  margin-top: 10.6rem;

  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 3.7rem;

    margin-bottom: 7.3rem;

    img {
      width: 4.4rem;
      height: 4.4rem;
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;

    > form {
      background-color: ${({theme}) => theme.DARK.DARK_700};
      border-radius: 16px;

      padding: 6.4rem;
      width: auto;
      max-width: 47.6rem;

      #desktop-title {
        display: block;
        text-align: center;

        font-family: Poppins, sans-serif;
        font-weight: 500;
        line-height: 140%;
        font-size: 3.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 3.2rem;

  max-width: 31.6rem;
  width: calc(28.1rem + 2vw);

  #desktop-title {
    display: none;
  }

  > .input-wrapper {
    display: grid;
    gap: .8rem;

    p {
      color: ${({theme}) => theme.LIGHT.LIGHT_400};
    }
  }

  > a {
    justify-self: center;
  }
`;
