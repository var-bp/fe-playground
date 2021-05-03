import * as React from 'react';
import * as SC from './Promo.style';

interface PromoProps {
  title: string;
  text: string;
  textContainerMaxWidth: string;
  titleColor: string;
  textColor: string;
  backgroundColor: string;
  onLinkClick?(): void;
}

const Promo = ({
  title,
  text,
  textContainerMaxWidth,
  titleColor,
  textColor,
  backgroundColor,
  onLinkClick,
}: PromoProps): JSX.Element => {
  const handleLinkClick = React.useCallback(
    e => {
      const targetLink = e.target.closest('a');
      if (!targetLink) return;
      e.preventDefault();
      if (onLinkClick) onLinkClick();
    },
    [onLinkClick],
  );

  return (
    <SC.Container backgroundColor={backgroundColor}>
      <SC.TextContainer maxWidth={textContainerMaxWidth}>
        <SC.Title color={titleColor}>{title}</SC.Title>
        <SC.Text
          color={textColor}
          dangerouslySetInnerHTML={{__html: text}}
          onClick={onLinkClick ? handleLinkClick : undefined}
        />
      </SC.TextContainer>
    </SC.Container>
  );
};

export default React.memo(Promo);
