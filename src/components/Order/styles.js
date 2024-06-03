import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-content: center;
  gap: 1.6rem;
  flex-shrink: 0;

  padding: .8rem 2rem;
  width: 34.8rem;
  min-height: 11.4rem;

  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.DARK.DARK_1000};

  p {
    color: ${({theme}) => theme.LIGHT.LIGHT_400};
    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;
  }

  > .code-status-date {
    display: flex;
    gap: 3.1rem;

    .status {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
  }
`;