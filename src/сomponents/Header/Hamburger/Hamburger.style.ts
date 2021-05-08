import styled, {css} from 'styled-components';
import {BACKGROUND_COLOR_SENARY} from '../../../constants/colors';
import setColor from '../../../utils/setColor';

interface CommonProps {
  isActive: boolean;
}

export const Button = styled.button<CommonProps>`
  padding: 11px;
  display: block;
  cursor: pointer;
  text-transform: none;
  background-color: transparent;
  border: none;
  margin: 0;
  overflow: visible;

  &:active,
  &:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const Box = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

export const Inner = styled.div<CommonProps>`
  top: 50%;
  margin-top: -1px;
  transition-property: transform;
  width: 24px;
  height: 2px;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_SENARY)};
  border-radius: 10px;
  position: absolute;

  ${({isActive}) =>
    isActive
      ? css`
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: rotate(45deg);
        `
      : css`
          transition-duration: 0.075s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        `}

  &::before,
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_SENARY)};
    border-radius: 10px;
    position: absolute;
  }

  &::before {
    ${({isActive}) =>
      isActive
        ? css`
            top: 0;
            opacity: 0;
            transition: top 0.075s ease, opacity 0.075s 0.12s ease;
          `
        : css`
            top: -10px;
            transition: top 0.075s 0.12s ease, opacity 0.075s ease;
          `}
  }

  &::after {
    ${({isActive}) =>
      isActive
        ? css`
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
          `
        : css`
            bottom: -10px;
            transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          `}
  }
`;
