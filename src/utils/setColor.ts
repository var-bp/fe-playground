import { Themes } from '../hooks/useTheme';

const setColor = (
  themeName: Themes,
  defaultColor: string,
  darkColor?: string,
  lightColor?: string
): string | undefined => {
  const color = {
    default: defaultColor,
    dark: darkColor,
    light: lightColor,
  };
  return color[themeName];
};

export default setColor;
