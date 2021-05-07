import * as React from 'react';
import {useHistory} from 'react-router-dom';
import {
  BUTTON_COLOR_TERTIARY,
  BACKGROUND_COLOR_SECONDARY,
  BACKGROUND_COLOR_TERTIARY,
  BACKGROUND_COLOR_QUATERNARY,
  HEADING_COLOR_SECONDARY,
  TEXT_COLOR_QUATERNARY,
} from '../../constants/colors';
import {MEDIA_QUERY_WIDTH} from '../../constants/grid-breakpoints';
import {
  GIFT_ROUT,
  MENU_ROUT,
  HOT_BREAKFAST_ROUT,
  WAYS_TO_ORDER_ROUT,
  SIGN_IN_ROUT,
  UBER_EATS_ROUT,
  STORIES_STARBUCKS_ROUT,
} from '../../constants/routs';
import Card from '../../сomponents/Card';
import Promo from '../../сomponents/Promo';
import Grid from '../../сomponents/Grid';
import * as SC from './Home.style';

const mediaQueryList = window.matchMedia(`(max-width: ${MEDIA_QUERY_WIDTH.lg})`);

const Home = (): JSX.Element => {
  const {push} = useHistory();

  const [isMobile, setIsMobile] = React.useState(mediaQueryList.matches);

  const goToExternalLink = React.useCallback(
    (link: string) => () => {
      window.location.href = link;
    },
    [],
  );

  const goToInternalLink = React.useCallback(
    (link: string) => () => {
      push(link);
    },
    [push],
  );

  React.useEffect(() => {
    const handleWindowResize = (e: {matches: boolean | ((prevState: boolean) => boolean)}): void => {
      setIsMobile(e.matches);
    };
    mediaQueryList.addEventListener('change', handleWindowResize);
    return () => {
      mediaQueryList.removeEventListener('change', handleWindowResize);
    };
  }, []);

  return (
    <SC.Container>
      <Grid>
        <SC.Content>
          <Promo
            title="It's nurse & teacher appreciation week"
            text="Treat these everyday heroes to their favorite food or drinks with a Starbucks Card. <a>Choose an eGift</a>."
            textContainerMaxWidth={isMobile ? 'none' : '60%'}
            titleColor={HEADING_COLOR_SECONDARY}
            textColor={TEXT_COLOR_QUATERNARY}
            backgroundColor={BACKGROUND_COLOR_QUATERNARY}
            onLinkClick={goToInternalLink(GIFT_ROUT)}
          />
          <Card
            isVertical={isMobile}
            isColumnReversed={isMobile}
            backgroundColor={BACKGROUND_COLOR_SECONDARY}
            title="Free coffee is a tap away"
            text="Join now to start earning Rewards."
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70876.png"
            imageAlt="Illustrative radiating Starbucks Rewards star."
            buttonText="Order coffee"
            buttonColor={BUTTON_COLOR_TERTIARY}
            onButtonClick={goToInternalLink(MENU_ROUT)}
          />
          <Card
            isVertical={isMobile}
            isColumnReversed={isMobile}
            backgroundColor={BACKGROUND_COLOR_TERTIARY}
            title="Feel-good flavors"
            text="Our Kale & Portabella Mushroom Sous Vide Egg Bites and Southwest Veggie Wrap made for satisfying mornings."
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70757.png"
            imageAlt="Two round egg bites sit next to a cut, stacked wrap."
            buttonText="Order hot breakfast"
            buttonColor={BUTTON_COLOR_TERTIARY}
            onButtonClick={goToInternalLink(HOT_BREAKFAST_ROUT)}
          />
          <SC.Title>More ways to discover</SC.Title>
          <SC.CardContainer>
            <Card
              isVertical
              isColumnReversed
              backgroundColor={BACKGROUND_COLOR_TERTIARY}
              title="Order and pick up. Easy as that."
              text="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
              imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"
              imageAlt="Illustrated hand holding a phone with the app open in front of a Starbucks store."
              buttonText="See pickup options"
              buttonColor={BUTTON_COLOR_TERTIARY}
              onButtonClick={goToInternalLink(WAYS_TO_ORDER_ROUT)}
            />
            <Card
              isVertical
              isColumnReversed
              backgroundColor={BACKGROUND_COLOR_TERTIARY}
              title="Earning 4,500 Bonus Stars is Super Starifying"
              text="With a <strong>$0 intro annual fee for your first year</strong>, earn more Stars and even more Rewards with the Starbucks® Rewards Visa® Card"
              imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70878.jpg"
              imageAlt="Starbucks® Rewards Visa® Credit Card in front of large gold star and smaller gold stars."
              buttonText="Learn more"
              buttonColor={BUTTON_COLOR_TERTIARY}
              onButtonClick={goToInternalLink(SIGN_IN_ROUT)}
            />
          </SC.CardContainer>
          <Card
            isVertical={isMobile}
            backgroundColor={BACKGROUND_COLOR_TERTIARY}
            title="Spring cheer is here"
            text="A Starbucks® delivery on Uber Eats will brighten up any day."
            isColumnReversed
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69199.jpg"
            imageAlt="Illustration of a woman sitting on her porch, taking a break from planting flowers with a drink in hand."
            buttonText="Order now"
            buttonColor={BUTTON_COLOR_TERTIARY}
            onButtonClick={goToExternalLink(UBER_EATS_ROUT)}
          />
          <Card
            isVertical={isMobile}
            backgroundColor={BACKGROUND_COLOR_TERTIARY}
            title="Honoring AAPI Heritage Month"
            text="This Asian American and Pacific Islander Heritage Month, see how these partners (employees) are finding community across cultures."
            isColumnReversed
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70995.jpg"
            imageAlt="Collage of the three featured Starbucks partners (employees) wearing masks."
            buttonText="See more"
            buttonColor={BUTTON_COLOR_TERTIARY}
            onButtonClick={goToExternalLink(STORIES_STARBUCKS_ROUT)}
          />
        </SC.Content>
      </Grid>
    </SC.Container>
  );
};

export default Home;
