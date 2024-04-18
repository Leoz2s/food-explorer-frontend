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
  padding: 1.6rem 5.6rem 3.3rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .input-wrap {
    display: grid;
    gap: 1.6rem;

    input {
      width: 100%;
    }
  }

  > .input-wrap .ingredients-group {
      display: flex;
      flex-wrap: wrap;
      /* justify-content: center; */
      gap: 1.6rem;

      padding: .4rem .8rem;
      background-color: ${({theme}) => theme.DARK.DARK_800};
      border-radius: 8px;

      span {
        background-color: ${({theme}) => theme.LIGHT.LIGHT_600};
        border-radius: 8px;
      }
  }

  button {
    justify-content: center;
  }
`;

export const Form = styled.form `

`;