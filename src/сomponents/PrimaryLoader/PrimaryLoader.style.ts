import styled, {keyframes} from 'styled-components';
import {BORDER_COLOR_PRIMARY, BORDER_COLOR_SECONDARY, BOX_SHADOW_COLOR_PRIMARY} from '../../constants/colors';
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
  border: 2px solid ${({theme}) => setColor(theme.name, BORDER_COLOR_PRIMARY)};
  border-radius: 0px 0px 10px 10px;

  &::after,
  &::before {
    position: absolute;
    content: '';
  }

  &::after {
    width: 10px;
    height: 24px;
    border: 2px solid ${({theme}) => setColor(theme.name, BORDER_COLOR_PRIMARY)};
    border-left: none;
    border-radius: 0px 40px 40px 0px;
    top: 4px;
    left: 39px;
  }

  &::before {
    width: 1px;
    height: 12px;
    border: 1px solid ${({theme}) => setColor(theme.name, BORDER_COLOR_SECONDARY)};
    top: -16px;
    left: 7px;
    transform-origin: 0 bottom;
    box-shadow: 10px 0px 0px 0px ${({theme}) => setColor(theme.name, BOX_SHADOW_COLOR_PRIMARY)},
      10px -10px 0px 0px ${({theme}) => setColor(theme.name, BOX_SHADOW_COLOR_PRIMARY)},
      20px 0px 0px 0px ${({theme}) => setColor(theme.name, BOX_SHADOW_COLOR_PRIMARY)};
    animation: ${steam} 1s linear infinite alternate;
  }
`;
