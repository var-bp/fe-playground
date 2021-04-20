import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Theme } from '../src/hooks/useTheme';
import { WHITE } from '../src/constants/colors';
import setColor from '../src/utils/setColor';

export default createGlobalStyle<{ theme: Theme }>`
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
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${({ theme }) => setColor(theme.name, WHITE)};
  }

  #root {
    height: 100%;
  }
`;
