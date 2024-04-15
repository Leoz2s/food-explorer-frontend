import {styled} from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;

  > main {
    display: grid;
    justify-content: center;

    padding-left: 2.4rem;

    .dishes-group {
      margin-block: 2.4rem;

      display: flex;
      gap: 1.6rem;

      overflow-x: scroll;
    }
  }
`;

export const Message = styled.div`
    margin-block: 4.4rem 6.2rem;

    background-image: ${({theme}) => theme.GRADIENTS.GRADIENT_200};
    width: 34.6rem;
    height: 12rem;
    
    display: flex;
    justify-content: center;
    margin-inline: auto;

    position: relative;
    
    > img {
      width: 191px;
      height: 149px;

      position: absolute;
      top: -3rem;
      left: -3rem;
    }

    > #message-content {
      margin-left: 14.5rem;

      font-family: Poppins, sans-serif;
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
      line-height: 130%;

      width: 29.5rem;

      h2 {
        margin-top: 3.6rem;

        font-size: 1.8rem;
        font-weight: 600;
      }

      p {
        font-size: 1.2rem;
      }
    }
`;