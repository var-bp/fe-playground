import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spanned = styled.div``;

const steam = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }

  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`
export const CoffeeCup = styled.div`
  width: 40px;
  height: 48px;
  margin-top: 30px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BORDER};
  border-radius: 0px 0px 10px 10px;

  &::after,
  &::before {
    position: absolute;
    content: "";
  }

  &::after {
    width: 10px;
    height: 24px;
    border: 2px solid ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BORDER_AFTER};
    border-left: none;
    border-radius: 0px 40px 40px 0px;
    top: 4px;
    left: 39px;
  }

  &::before {
    width: 1px;
    height: 12px;
    border: 1px solid ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BORDER_BEFORE};
    top: -16px;
    left: 7px;
    transform-origin: 0 bottom;
    box-shadow:
      10px 0px 0px 0px ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BEFORE_BOX_SHADOW},
      10px -10px 0px 0px ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BEFORE_BOX_SHADOW},
      20px 0px 0px 0px ${({ theme }) => theme.PRIMARY_LOADER_COFFEE_CUP_BEFORE_BOX_SHADOW};
    animation: ${steam} 1s linear infinite alternate;
  }
`;
