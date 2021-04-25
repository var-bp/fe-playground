import {generateMedia} from 'styled-media-query';

export const CONTAINER_OFFSET_LEFT = '15px';
export const CONTAINER_OFFSET_RIGHT = '15px';

// https://getbootstrap.com/docs/5.0/layout/breakpoints/
export const CONTAINER_WIDTH = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};

// https://github.com/morajabi/styled-media-query#-usage
export const MEDIA_QUERY = generateMedia({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
});
