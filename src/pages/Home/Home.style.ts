import styled from 'styled-components';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';

const CARD_OFFSET = '30px';

export const Container = styled.div`
  margin-top: ${CARD_OFFSET};

  > div {
    margin-bottom: ${CARD_OFFSET};
  }
`;

export const CardContainer = styled.div`
  ${MEDIA_QUERY.lessThan('lg')`
    > div:first-child {
      margin-bottom: ${CARD_OFFSET};
    }
  `}

  ${MEDIA_QUERY.greaterThan('lg')`
    display: flex;

    > div {
      width: 50%;

      &:not(:last-child) {
        margin-right: ${CARD_OFFSET};
      }
    }
  `}
`;
