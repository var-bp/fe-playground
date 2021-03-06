import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD} from '../../constants/typography';
import {PAGE_CONTENT_OFFSET} from '../../constants/spacing';
import {HEADING_COLOR_PRIMARY} from '../../constants/colors';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import setColor from '../../utils/setColor';

export const Container = styled.div`
  margin-top: ${PAGE_CONTENT_OFFSET};

  > div {
    margin-bottom: ${PAGE_CONTENT_OFFSET};
  }
`;

export const Content = styled.div`
  > div {
    margin-bottom: ${PAGE_CONTENT_OFFSET};
  }
`;

export const CardContainer = styled.div`
  ${MEDIA_QUERY.lessThan('lg')`
    > div:first-child {
      margin-bottom: ${PAGE_CONTENT_OFFSET};
    }
  `}

  ${MEDIA_QUERY.greaterThan('lg')`
    display: flex;

    > div {
      width: 50%;

      &:not(:last-child) {
        margin-right: ${PAGE_CONTENT_OFFSET};
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

  ${MEDIA_QUERY.lessThan('lg')`
    font-size: 28px;
  `}
`;
