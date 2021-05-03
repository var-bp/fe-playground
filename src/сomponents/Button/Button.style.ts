import styled, {css} from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_DEMI_BOLD} from '../../constants/typography';
import {
  BUTTON_BACKGROUND_COLOR_PRIMARY,
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY,
  BUTTON_BORDER_COLOR_PRIMARY,
} from '../../constants/colors';
import {BUTTON_TRANSITION} from '../../constants/transitions';
import setColor from '../../utils/setColor';

interface ButtonProps {
  buttonColor?: string;
  buttonStyle: string;
}

const switchBetweenButtonStyles = (style: string) => {
  switch (style) {
    case 'primary':
      return css`
        border-color: ${({theme}) => setColor(theme.name, BUTTON_BORDER_COLOR_PRIMARY)};
        color: ${({theme}) => setColor(theme.name, BUTTON_COLOR_PRIMARY)};

        &:hover {
          background-color: rgba(0, 0, 0, 0.06);
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({theme}) => setColor(theme.name, BUTTON_BACKGROUND_COLOR_PRIMARY)};
        border-color: ${({theme}) => setColor(theme.name, BUTTON_BORDER_COLOR_PRIMARY)};
        color: ${({theme}) => setColor(theme.name, BUTTON_COLOR_SECONDARY)};

        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
          border-color: rgba(0, 0, 0, 0.7);
        }
      `;
    default:
      return undefined;
  }
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid transparent;
  padding: 7px 16px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_DEMI_BOLD};
  font-size: 14px;
  line-height: 1.2;
  background-color: transparent;
  transition: background-color ${BUTTON_TRANSITION}, border-color ${BUTTON_TRANSITION};

  ${({buttonStyle}) => switchBetweenButtonStyles(buttonStyle)};

  ${({buttonColor}) =>
    buttonColor &&
    css`
      border-color: ${({theme}) => setColor(theme.name, buttonColor)};
      color: ${({theme}) => setColor(theme.name, buttonColor)};
    `};
`;
