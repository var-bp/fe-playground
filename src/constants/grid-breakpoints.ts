import { generateMedia } from "styled-media-query";

// https://getbootstrap.com/docs/5.0/layout/breakpoints/
export const GRID_BREAKPOINTS = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

// https://github.com/morajabi/styled-media-query#-usage
export const MEDIA_QUERY = generateMedia(GRID_BREAKPOINTS);
