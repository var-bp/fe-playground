import {css, FlattenSimpleInterpolation} from 'styled-components';

// https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
export const imgFluid = (width: string, height: string): FlattenSimpleInterpolation => css`
  display: block;
  height: auto;

  @supports (aspect-ratio: auto) and (not (aspect-ratio: attr(width) / attr(height))) {
    width: 100%;
    aspect-ratio: ${width} / ${height};
  }

  @supports (aspect-ratio: auto) and (aspect-ratio: attr(width) / attr(height)) {
    width: 100%;
    aspect-ratio: attr(width) / attr(height);
  }

  @supports not (aspect-ratio: auto) {
    max-width: 100%;
  }
`;
