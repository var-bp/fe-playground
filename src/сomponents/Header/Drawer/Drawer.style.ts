import styled, {css} from 'styled-components';
import {MEDIA_QUERY} from '../../../constants/grid-breakpoints';
import {HEADER_HEIGHT, HEADER_HEIGHT_MOBILE} from '../../../constants/spacing';
import {BACKGROUND_COLOR_PRIMARY} from '../../../constants/colors';
import setColor from '../../../utils/setColor';

interface CommonProps {
  isActive: boolean;
}

export const Container = styled.div<CommonProps>`
  position: fixed;
  top: ${HEADER_HEIGHT};
  right: 0;
  bottom: 0;
  z-index: 100;

  ${({isActive}) =>
    isActive &&
    css`
      left: 0;
    `}

  ${MEDIA_QUERY.lessThan('lg')`
    top: ${HEADER_HEIGHT_MOBILE};
  `}
`;

export const Mask = styled.div<CommonProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  background-color: rgba(0, 0, 0, 0.45);

  ${({isActive}) =>
    isActive &&
    css`
      opacity: 1;
    `}
`;

export const ContentWrapper = styled.div<CommonProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1), box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);

  ${({isActive}) =>
    isActive &&
    css`
      transform: translateX(0);
      box-shadow: -6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),
        -12px 0 48px 16px rgba(0, 0, 0, 0.03);
    `}
`;

export const Content = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_PRIMARY)};
`;
