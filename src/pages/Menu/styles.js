import {styled} from 'styled-components';

export const Container = styled.div`
  > header {
    display: flex;
    gap: .8rem;
  }
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_1000};
  margin-bottom: 1rem;
`;