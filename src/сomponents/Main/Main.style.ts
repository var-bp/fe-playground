import styled from 'styled-components';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import {HEADER_HEIGHT, HEADER_HEIGHT_MOBILE} from '../../constants/spacing';

export const Main = styled.main`
  padding-top: ${HEADER_HEIGHT};

  ${MEDIA_QUERY.lessThan('lg')`
    padding-top: ${HEADER_HEIGHT_MOBILE};
  `}
`;
