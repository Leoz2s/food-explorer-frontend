import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  background-color: ${({theme}) => theme.DARK.DARK_200};
  border: 1px solid ${({theme}) => theme.DARK.DARK_300};
  border-radius: 8px;

  display: grid;
  justify-items: center;
  align-content: center;
  gap: 1.2rem;
  
  flex-shrink: 0;

  position: relative;

  > .action-icon {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    cursor: pointer;
  }

  > .dish-image {
    --image-size: 8.8rem;
    height: var(--image-size);
    width: var(--image-size);
  }

  > p {
    cursor: pointer;

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.LIGHT.LIGHT_300};

    display: flex;
    align-items: center;
    gap: .7rem;

    img {
      width: .5rem;
      height: .8rem;
    }
  }

  > span {
    color: ${({theme}) => theme.TINTS.CAKE_100}
  }

  > button {
    width: 16.2rem;
    height: 3.2rem;
    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;