import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD} from '../../constants/typography';
import {HEADING_COLOR_PRIMARY} from '../../constants/colors';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import setColor from '../../utils/setColor';

const CARD_OFFSET = '30px';

export const Container = styled.div`
  margin-top: ${CARD_OFFSET};

  > div {
    margin-bottom: ${CARD_OFFSET};
  }
`;

export const Content = styled.div`
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

export const Title = styled.div`
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 50px;
  line-height: 1.2;
  color: ${({theme}) => setColor(theme.name, HEADING_COLOR_PRIMARY)};
  text-transform: uppercase;
  text-align: center;
`;
