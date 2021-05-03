import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_REGULAR, FONT_WEIGHT_BOLD} from '../../constants/typography';
import setColor from '../../utils/setColor';

interface ContainerProps {
  backgroundColor: string;
}
interface TextContainerProps {
  maxWidth: string;
}
interface TitleProps {
  color: string;
}
interface TextProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 30px;
  background-color: ${({theme, backgroundColor}) => setColor(theme.name, backgroundColor)};
`;

export const TextContainer = styled.div<TextContainerProps>`
  max-width: ${({maxWidth}) => maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.div<TitleProps>`
  margin-bottom: 25px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 50px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: ${({theme, color}) => setColor(theme.name, color)};
`;

export const Text = styled.div<TextProps>`
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: ${({theme, color}) => setColor(theme.name, color)};

  > a {
    color: currentColor;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
