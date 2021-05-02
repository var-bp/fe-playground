import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished';
import {Theme} from './hooks/useTheme';
import {BACKGROUND_COLOR_PRIMARY, TEXT_COLOR_PRIMARY} from './constants/colors';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_REGULAR} from './constants/typography';
import setColor from './utils/setColor';

export default createGlobalStyle<{theme: Theme}>`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-size: 16px;
    font-weight: ${FONT_WEIGHT_REGULAR};
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_PRIMARY)};
    background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_PRIMARY)};
  }

  #root {
    height: 100%;
  }
`;
