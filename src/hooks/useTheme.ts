import {useState, useEffect} from 'react';

export type Themes = 'default' | 'dark' | 'light';

export interface Theme {
  name: Themes;
}

interface UseTheme {
  theme: Theme;
  switchTheme: (themeName: Themes) => void;
}

const projectName = 'FE_PLAYGROUND_THEME';

const getInitialTheme = () => {
  const theme = localStorage.getItem(projectName);
  return {name: theme ? JSON.parse(theme) : 'default'};
};

const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const switchTheme = (themeName: Themes) => {
    if (themeName) setTheme({name: themeName});
  };

  useEffect(() => {
    localStorage.setItem(projectName, JSON.stringify(theme.name));
  }, [theme]);

  return {theme, switchTheme};
};

export default useTheme;
