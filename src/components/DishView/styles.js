import {styled} from 'styled-components';

export const Container = styled.div`
  padding-block: 1.6rem;
  width: 35rem;

  display: flex;
  gap: 1.3rem;

  > img {
    width: 10rem;
    height: 10rem;
  }

  > .infos-action {
    display: grid;
    align-content: center;
    justify-items: left;

    button.dish-name {
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
    }

    button {
      color: ${({theme}) => theme.TINTS.TOMATO_400};
      font-family: Roboto;
      font-size: 1.2rem;
      line-height: 160%;
    }
  }
`;