import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_REGULAR} from '../../constants/typography';
import {TEXT_COLOR_QUINARY, BACKGROUND_COLOR_PRIMARY} from '../../constants/colors';
import setColor from '../../utils/setColor';

export const Footer = styled.footer`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_PRIMARY)};
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.1), 0px -2px 2px 0px rgba(0, 0, 0, 0.06),
    0px 0px 2px 0px rgba(0, 0, 0, 0.07);

  small {
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_REGULAR};
    font-size: 14px;
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_QUINARY)};
  }
`;
