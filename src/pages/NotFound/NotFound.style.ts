import styled from 'styled-components';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR} from '../../constants/typography';
import {imgFluid} from '../../constants/mixins';
import {
  HEADING_COLOR_TERTIARY,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_QUINARY,
  BACKGROUND_COLOR_QUINARY,
} from '../../constants/colors';
import setColor from '../../utils/setColor';

export const Container = styled.div`
  height: 100%;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_QUINARY)};

  > div {
    height: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    display: flex;

    ${MEDIA_QUERY.lessThan('xl')`
      flex-direction: column;
      margin-top: -32vw;
    `}
  }
`;

export const ImageContainer = styled.div`
  ${MEDIA_QUERY.greaterThan('xl')`
    position: relative;
    width: 360px;
    height: 126px;
  `}
`;

export const Image = styled.img`
  ${MEDIA_QUERY.greaterThan('xl')`
    position: absolute;
    top: -112px;
    right: 0;
    object-fit: contain;
    height: 285px;
    width: 360px;
  `}

  ${MEDIA_QUERY.lessThan('xl')`
    ${
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (props: any) => imgFluid(props.width, props.height)
    };
  `}
`;

export const TextContainer = styled.div`
  ${MEDIA_QUERY.greaterThan('xl')`
    padding-left: 20px;
  `}

  ${MEDIA_QUERY.lessThan('xl')`
    padding-left: 5px;
    padding-right: 5px;
  `}

  > div:nth-child(1) {
    margin-bottom: 5px;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_BOLD};
    line-height: 1.29;
    color: ${({theme}) => setColor(theme.name, HEADING_COLOR_TERTIARY)};

    ${MEDIA_QUERY.greaterThan('xl')`
      font-size: 36px;
    `}

    ${MEDIA_QUERY.lessThan('xl')`
      font-size: 28px;
      text-align: center;
    `}
  }

  > div:nth-child(2) {
    margin-bottom: 15px;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_REGULAR};
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_PRIMARY)};

    ${MEDIA_QUERY.greaterThan('xl')`
      font-size: 24px;
    `}

    ${MEDIA_QUERY.lessThan('xl')`
      font-size: 19px;
      text-align: center;
    `}
  }

  > div:nth-child(3) {
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_REGULAR};
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_QUINARY)};

    ${MEDIA_QUERY.greaterThan('xl')`
      font-size: 16px;
    `}

    ${MEDIA_QUERY.lessThan('xl')`
      font-size: 14px;
      text-align: center;
    `}
  }
`;
