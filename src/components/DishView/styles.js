import {styled} from 'styled-components';

export const Container = styled.div`
  padding-block: 1.6rem;
  width: 36rem;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.3rem;

  .item-image {
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
      text-align: left;

      span {
        color: ${({theme}) => theme.LIGHT.LIGHT_400};
        font-family: Roboto;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%; /* 19.2px */

        margin-left: 1rem;
      }
    }

    button {
      color: ${({theme}) => theme.TINTS.TOMATO_400};
      font-family: Roboto;
      font-size: 1.2rem;
      line-height: 160%;
    }
  }
`;