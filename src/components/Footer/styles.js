import styled from "styled-components";

export const Container = styled.footer`
  padding: 2.4rem 1.23rem;
  background-color: ${({theme}) => theme.DARK.DARK_600};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  > p {
    display: flex;
    align-items: center;
    gap: .8rem;
    
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_700};

    width: fit-content;

    img {
      fill: ${({theme}) => theme.LIGHT.LIGHT_700};
    }
  }

  > span {
    font-family: "DM Sans", sans-serif;
    font-size: 1.2rem;
    color: ${({theme}) => theme.LIGHT.LIGHT_200};
    text-align: right;
  }

  @media (min-width: 1000px) {
    padding-inline: 12.3rem;
    justify-content: space-between;
  }
`;