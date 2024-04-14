import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;

  margin-top: 10.6rem;
  
  > h1 {
    display: flex;
    justify-content: center;
    gap: 1rem;

    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 3.7rem;

    margin-bottom: 7.3rem;
  }

  > form {
    display: grid;
    gap: 3.2rem;

    max-width: 31.6rem;
    width: calc(28.1rem + 2vw);

    .input-wrapper {
      display: grid;
      gap: .8rem;
    }

    a {
      text-align: center;
    }
  }
`;