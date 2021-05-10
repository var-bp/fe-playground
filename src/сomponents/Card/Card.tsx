import * as React from 'react';
import Button from '../Button';
import * as SC from './Card.style';

interface CardProps {
  title: string;
  text: string;
  backgroundColor: string;
  isColumnReversed?: boolean;
  isVertical: boolean;
  imageSrc: string;
  imageHeight: string;
  imageWidth: string;
  imageAlt?: string;
  buttonText: string;
  buttonColor: string;
  onButtonClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
}

const Card = ({
  title,
  text,
  backgroundColor,
  isColumnReversed,
  isVertical,
  imageSrc,
  imageHeight,
  imageWidth,
  imageAlt,
  buttonText,
  buttonColor,
  onButtonClick,
}: CardProps): JSX.Element => {
  return (
    <SC.Container isVertical={isVertical} backgroundColor={backgroundColor}>
      <SC.Column isVertical={isVertical} order={isColumnReversed ? 2 : 1}>
        <SC.TextContainer>
          <SC.Title>{title}</SC.Title>
          <SC.Text dangerouslySetInnerHTML={{__html: text}} />
          <Button text={buttonText} buttonColor={buttonColor} onClick={onButtonClick} />
        </SC.TextContainer>
      </SC.Column>
      <SC.Column isVertical={isVertical} order={isColumnReversed ? 1 : 2}>
        <SC.Image height={imageHeight} width={imageWidth} src={imageSrc} alt={imageAlt} loading="lazy" />
      </SC.Column>
    </SC.Container>
  );
};

Card.defaultProps = {
  isColumnReversed: false,
  isVertical: false,
};

export default React.memo(Card);
