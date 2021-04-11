import { useState, useEffect } from 'react';
import { Themes } from '../constants/theme.d';
import defaultThemeColors from '../constants/default-theme/colors';
// import defaultThemeTypography from '../constants/default-theme/typography';

const themes: Themes = {
  default: {
    ...defaultThemeColors,
    // ...defaultThemeTypography,
  },
};

const projectName = 'FE_PLAYGROUND_THEME';

const getInitialTheme = () => {
  const theme = localStorage.getItem(projectName);
  return theme ? JSON.parse(theme) : themes.default;
};

const useTheme = () => {
  const [theme, _setTheme] = useState(getInitialTheme);

  const setTheme = (name: 'default') => {
    const _theme = themes[name];
    if (_theme) _setTheme(_theme);
  };

  useEffect(() => {
    localStorage.setItem(projectName, JSON.stringify(theme));
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
