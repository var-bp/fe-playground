import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR} from '../../constants/typography';
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

  > div {
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 360px;
  height: 126px;
`;

export const Image = styled.img`
  position: absolute;
  top: -112px;
  right: 0;
  object-fit: contain;
  height: 285px;
`;

export const TextContainer = styled.div`
  padding-left: 20px;

  > div:nth-child(1) {
    margin-bottom: 5px;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: 36px;
    line-height: 1.29;
    color: ${({theme}) => setColor(theme.name, HEADING_COLOR_TERTIARY)};
  }

  > div:nth-child(2) {
    margin-bottom: 15px;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_REGULAR};
    font-size: 24px;
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_PRIMARY)};
  }

  > div:nth-child(3) {
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_REGULAR};
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_QUINARY)};
  }
`;
