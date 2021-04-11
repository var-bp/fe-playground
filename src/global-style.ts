import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Theme } from './constants/theme.d';

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
    background-color: ${({ theme }) => theme.BODY_BACKGROUND_COLOR};
  }

  #root {
    height: 100%;
  }
`;
