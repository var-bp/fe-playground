import * as React from 'react';
import {BACKGROUND_COLOR_SECONDARY, BACKGROUND_COLOR_TERTIARY} from '../../constants/colors';
import {CONTAINER_WIDTH} from '../../constants/grid-breakpoints';
import Card from '../../сomponents/Card';
import cardImage from '../../static/img/137-70876.webp';
import cardImage2 from '../../static/img/137-70757.png';
import cardImage3 from '../../static/img/137-70203.webp';
import cardImage4 from '../../static/img/137-70878.webp';
import cardImage5 from '../../static/img/137-69199.jpeg';
import * as SC from './Home.style';

const mediaQueryList = window.matchMedia(`(max-width: ${CONTAINER_WIDTH.lg})`);

const Home = (): JSX.Element => {
  const [isMobile, setIsMobile] = React.useState(mediaQueryList.matches);

  React.useEffect(() => {
    const handleWindowResize = (e: {matches: boolean | ((prevState: boolean) => boolean)}) => {
      setIsMobile(e.matches);
    };
    mediaQueryList.addEventListener('change', handleWindowResize);
    return () => {
      mediaQueryList.removeEventListener('change', handleWindowResize);
    };
  }, []);

  return (
    <SC.Container>
      <Card
        isVertical={isMobile}
        isColumnReversed={isMobile}
        backgroundColor={BACKGROUND_COLOR_SECONDARY}
        title="Free coffee is a tap away"
        text="Join now to start earning Rewards."
        imageSrc={cardImage}
        imageAlt="Illustrative radiating Starbucks Rewards star."
      />
      <Card
        isVertical={isMobile}
        isColumnReversed={isMobile}
        backgroundColor={BACKGROUND_COLOR_TERTIARY}
        title="Feel-good flavors"
        text="Our Kale & Portabella Mushroom Sous Vide Egg Bites and Southwest Veggie Wrap made for satisfying mornings."
        imageSrc={cardImage2}
        imageAlt="Two round egg bites sit next to a cut, stacked wrap."
      />
      <SC.CardContainer>
        <Card
          isVertical
          isColumnReversed
          backgroundColor={BACKGROUND_COLOR_TERTIARY}
          title="Order and pick up. Easy as that."
          text="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
          imageSrc={cardImage3}
          imageAlt="Illustrated hand holding a phone with the app open in front of a Starbucks store."
        />
        <Card
          isVertical
          isColumnReversed
          backgroundColor={BACKGROUND_COLOR_TERTIARY}
          title="Earning 4,500 Bonus Stars is Super Starifying"
          text="With a <strong>$0 intro annual fee for your first year</strong>, earn more Stars and even more Rewards with the Starbucks® Rewards Visa® Card"
          imageSrc={cardImage4}
          imageAlt="Starbucks® Rewards Visa® Credit Card in front of large gold star and smaller gold stars."
        />
      </SC.CardContainer>
      <Card
        isVertical={isMobile}
        backgroundColor={BACKGROUND_COLOR_TERTIARY}
        title="Spring cheer is here"
        text="A Starbucks® delivery on Uber Eats will brighten up any day."
        isColumnReversed
        imageSrc={cardImage5}
        imageAlt="Illustration of a woman sitting on her porch, taking a break from planting flowers with a drink in hand."
      />
    </SC.Container>
  );
};

export default Home;
