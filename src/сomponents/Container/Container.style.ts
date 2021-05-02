import styled from 'styled-components';
import {
  CONTAINER_WIDTH,
  MEDIA_QUERY,
  CONTAINER_OFFSET_LEFT,
  CONTAINER_OFFSET_RIGHT,
} from '../../constants/grid-breakpoints';

export const Grid = styled.div`
  width: 100%;
  padding-right: ${CONTAINER_OFFSET_RIGHT};
  padding-left: ${CONTAINER_OFFSET_LEFT};
  margin-right: auto;
  margin-left: auto;

  ${MEDIA_QUERY.greaterThan('sm')`
    max-width: ${CONTAINER_WIDTH.sm};
  `}

  ${MEDIA_QUERY.greaterThan('md')`
    max-width: ${CONTAINER_WIDTH.md};
  `}

  ${MEDIA_QUERY.greaterThan('lg')`
    max-width: ${CONTAINER_WIDTH.lg};
  `}

  ${MEDIA_QUERY.greaterThan('xl')`
    max-width: ${CONTAINER_WIDTH.xl};
  `}

  ${MEDIA_QUERY.greaterThan('xxl')`
    max-width: ${CONTAINER_WIDTH.xxl};
  `}
`;
