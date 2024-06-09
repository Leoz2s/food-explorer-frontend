import styled from 'styled-components';

export const Container = styled.div`
  --select-width: 17.5rem;
  --select-height: 4.8rem;

  margin-top: -0.5rem;

  .options-view-button:focus + .select-button,
  .options-view-button:checked + .selected-button {
    outline: 1px solid ${({theme}) => theme.TINTS.CAKE_100};
  }
  .category-select:has(.options-view-button:checked) label,
  .options-view-button:checked + .select-button .chevrons {
    color: ${({theme}) => theme.TINTS.CAKE_100};
  }

  .options-view-button:checked + .select-button .chevrons img.down-icon {
    display: none;
  }
  .options-view-button:checked + .select-button .chevrons img.up-icon {
    display: block;
  }

  .category-select:has(.options-view-button:checked) + .options-list {
    display: block;
  }
  &:has(.option input:checked) .category-select label {
    color: ${({theme}) => theme.TINTS.CAKE_100};
  }
  &:has(.option input:checked) .selected-value {
    color: ${({theme}) => theme.LIGHT.LIGHT_300};
  }
`;

export const CategorySelect = styled.div`
  position: relative;

  > input {
    all: unset;
    height: 1rem;
  }

  > label {
    font-size: 0.75rem;
    letter-spacing: 0.0225rem;
  }

  .options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }
`;

export const SelectButton = styled.div`
  margin-top: .5rem;

  width: var(--select-width);
  height: var(--select-height);
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: .1rem;
  border: 1px solid ${({theme}) => theme.DARK.DARK_100};
  background-color: ${({theme}) => theme.DARK.DARK_900};
`;
export const SelectedValue = styled.div`  
  display: flex;
  align-items: center;
  gap: .8rem;

  height: var(--select-height);
  
  color: ${({theme}) => theme.LIGHT.LIGHT_400};
  font-family: Roboto;
  letter-spacing: 0.02625rem;
  font-size: 1.4rem;
  line-height: 160%; /* 22.4px */
`;
export const Chevrons = styled.div`
  color: ${({theme}) => theme.TINTS.CAKE_200};

  display: flex;

  > img {
    width: 2.4rem;
    height: 2.4rem;

    &.up-icon {
      display: none;
    }
  }
`;

export const OptionsList = styled.ul`
  display: none;

  margin-top: .25rem;
  width: var(--select-width);

  border-radius: .375rem;
  border: 1px solid ${({theme}) => theme.DARK.DARK_500};
  background-color: ${({theme}) => theme.DARK.DARK_800};

  > .option {
    display: flex;
    align-items: center;
    gap: .5rem;
    
    padding: .75rem;
    border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_400};

    position: relative;

    > .label {
      color: ${({theme}) => theme.LIGHT.LIGHT_300};
    }

    > img {
      width: 1.8rem;
      height: 1.8rem;

      &:last-child.check {
        margin-left: auto;
        color: ${({theme}) => theme.TINTS.CAKE_100};
        display: none;
      }
    }

    > input[type="radio"] {
      all: unset;

      position: absolute;
      inset: 0;

      cursor: pointer;
    }

    &:has(input:checked), &:hover {
      border-bottom: 1px solid ${({theme}) => theme.DARK.DARK_400};
      background-color: ${({theme}) => theme.DARK.DARK_500};
    }
    &:has(input:focus) {
      outline: 1px solid ${({theme}) => theme.TINTS.CAKE_100};
    }
    &:has(input:checked) .check {
      display: block;
    }
  }
`;