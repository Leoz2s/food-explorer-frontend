import {styled} from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;

  display: grid;

  justify-items: center;

  > main {

    background-color: darkblue;
    height: 37rem;
    width: 31.6rem;
  
    display: grid;
    align-content: start;
    justify-content: center;

    gap: 1rem;
  }
`;
