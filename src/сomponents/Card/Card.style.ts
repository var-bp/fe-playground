import styled, {css} from 'styled-components';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import {HEADING_COLOR_PRIMARY, TEXT_COLOR_TERTIARY} from '../../constants/colors';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR} from '../../constants/typography';
import {imgFluid} from '../../constants/mixins';
import setColor from '../../utils/setColor';

interface ColumnProps {
  order: number;
  isVertical: boolean;
}

interface ContainerProps {
  backgroundColor: string;
  isVertical: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  ${({isVertical}) =>
    isVertical
      ? css`
          flex-direction: column;
        `
      : css`
          ${MEDIA_QUERY.lessThan('lg')`
            flex-direction: column;
          `}
        `};
  background-color: ${({theme, backgroundColor}) => setColor(theme.name, backgroundColor)};
`;

export const Column = styled.div<ColumnProps>`
  ${({isVertical}) =>
    !isVertical &&
    css`
      ${MEDIA_QUERY.greaterThan('lg')`
        width: 50%;
      `}
    `};
  order: ${({order}) => order};
`;

export const TextContainer = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: 25px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 35px;
  line-height: 1.2;
  color: ${({theme}) => setColor(theme.name, HEADING_COLOR_PRIMARY)};
  text-transform: uppercase;
  text-align: center;
`;

export const Text = styled.div`
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-size: 24px;
  line-height: 1.5;
  color: ${({theme}) => setColor(theme.name, TEXT_COLOR_TERTIARY)};
  text-align: center;
`;

export const Image = styled.img`
  ${imgFluid}
`;
