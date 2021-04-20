import styled, {keyframes} from 'styled-components';
import {BLACK, SILVER} from '../../constants/colors';
import setColor from '../../utils/setColor';

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
`;
export const CoffeeCup = styled.div`
  width: 40px;
  height: 48px;
  margin-top: 30px;
  position: relative;
  border: 2px solid ${({theme}) => setColor(theme.name, BLACK)};
  border-radius: 0px 0px 10px 10px;

  &::after,
  &::before {
    position: absolute;
    content: '';
  }

  &::after {
    width: 10px;
    height: 24px;
    border: 2px solid ${({theme}) => setColor(theme.name, BLACK)};
    border-left: none;
    border-radius: 0px 40px 40px 0px;
    top: 4px;
    left: 39px;
  }

  &::before {
    width: 1px;
    height: 12px;
    border: 1px solid ${({theme}) => setColor(theme.name, SILVER)};
    top: -16px;
    left: 7px;
    transform-origin: 0 bottom;
    box-shadow: 10px 0px 0px 0px ${({theme}) => setColor(theme.name, SILVER)},
      10px -10px 0px 0px ${({theme}) => setColor(theme.name, SILVER)},
      20px 0px 0px 0px ${({theme}) => setColor(theme.name, SILVER)};
    animation: ${steam} 1s linear infinite alternate;
  }
`;
