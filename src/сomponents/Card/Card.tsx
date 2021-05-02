import * as React from 'react';
import * as SC from './Card.style';

interface CardProps {
  title: string;
  text: string;
  backgroundColor: string;
  isColumnReversed?: boolean;
  isVertical: boolean;
  imageSrc: string;
  imageAlt?: string;
}

const Card = ({
  title,
  text,
  backgroundColor,
  isColumnReversed,
  isVertical,
  imageSrc,
  imageAlt,
}: CardProps): JSX.Element => {
  return (
    <SC.Container isVertical={isVertical} backgroundColor={backgroundColor}>
      <SC.Column isVertical={isVertical} order={isColumnReversed ? 2 : 1}>
        <SC.TextContainer>
          <SC.Title>{title}</SC.Title>
          <SC.Text dangerouslySetInnerHTML={{__html: text}} />
        </SC.TextContainer>
      </SC.Column>
      <SC.Column isVertical={isVertical} order={isColumnReversed ? 1 : 2}>
        <SC.Image src={imageSrc} alt={imageAlt} />
      </SC.Column>
    </SC.Container>
  );
};

Card.defaultProps = {
  isColumnReversed: false,
  isVertical: false,
};

export default Card;
