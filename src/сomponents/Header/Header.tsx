import * as React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ICON_COLOR_PRIMARY, ICON_COLOR_SECONDARY, BACKGROUND_COLOR_PRIMARY} from '../../constants/colors';
import {
  HOME_ROUT,
  MENU_ROUT,
  REWARDS_ROUT,
  GIFT_ROUT,
  SIGN_IN_ROUT,
  REGISTRATION_ROUT,
  STORE_LOCATOR_ROUT,
} from '../../constants/routs';
import Grid from '../Grid';
import Button from '../Button';
import Icon from '../Icon';
import {MEDIA_QUERY_WIDTH} from '../../constants/grid-breakpoints';
import Hamburger from './Hamburger';
import Drawer from './Drawer';
import * as SC from './Header.style';

const mediaQueryList = window.matchMedia(`(max-width: ${MEDIA_QUERY_WIDTH.lg})`);

const Header = (): JSX.Element => {
  const {push} = useHistory();
  const {pathname} = useLocation();

  const [isMobile, setIsMobile] = React.useState(mediaQueryList.matches);
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const goToInternalLink = React.useCallback(
    (link: string) => () => {
      push(link);
    },
    [push],
  );

  const handleHamburgerClick = React.useCallback(() => {
    setIsMenuActive(s => !s);
  }, []);
  const handleMaskClick = React.useCallback(() => {
    setIsMenuActive(false);
  }, []);

  React.useEffect(() => {
    const handleWindowResize = (e: {matches: boolean | ((prevState: boolean) => boolean)}): void => {
      const flag = e.matches;
      setIsMobile(flag);
      if (!flag) setIsMenuActive(flag);
    };
    mediaQueryList.addEventListener('change', handleWindowResize);
    return () => {
      mediaQueryList.removeEventListener('change', handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    const element = document.querySelector('#root') as HTMLDivElement;
    if (isMenuActive) {
      element.style.overflow = 'hidden';
    } else {
      element.style.overflow = 'visible';
    }
  }, [isMenuActive]);

  React.useEffect(() => {
    if (isMenuActive) setIsMenuActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <SC.Header>
        <Grid>
          <SC.Panel>
            <SC.NavigationLinks>
              <SC.LogotypeLink to={HOME_ROUT}>
                <Icon
                  name="logotype"
                  width="51px"
                  height="51px"
                  color={ICON_COLOR_PRIMARY}
                  backgroundColor={BACKGROUND_COLOR_PRIMARY}
                />
              </SC.LogotypeLink>
              {!isMobile && (
                <SC.UnorderedList>
                  <SC.ListItem>
                    <SC.NavigationLink to={MENU_ROUT}>Menu</SC.NavigationLink>
                  </SC.ListItem>
                  <SC.ListItem>
                    <SC.NavigationLink to={REWARDS_ROUT}>Rewards</SC.NavigationLink>
                  </SC.ListItem>
                  <SC.ListItem>
                    <SC.NavigationLink to={GIFT_ROUT}>Gift Cards</SC.NavigationLink>
                  </SC.ListItem>
                </SC.UnorderedList>
              )}
            </SC.NavigationLinks>
            <SC.Controls>
              {isMobile ? (
                <Hamburger isActive={isMenuActive} onClick={handleHamburgerClick} />
              ) : (
                <>
                  <SC.NavigationLinkWithIcon to={STORE_LOCATOR_ROUT}>
                    <Icon name="location" width="25px" height="25px" color={ICON_COLOR_SECONDARY} />
                    <div>Find a store</div>
                  </SC.NavigationLinkWithIcon>
                  {pathname !== SIGN_IN_ROUT && <Button text="Sign in" onClick={goToInternalLink(SIGN_IN_ROUT)} />}
                  {pathname !== REGISTRATION_ROUT && (
                    <Button buttonStyle="secondary" text="Join now" onClick={goToInternalLink(REGISTRATION_ROUT)} />
                  )}
                </>
              )}
            </SC.Controls>
          </SC.Panel>
        </Grid>
      </SC.Header>
      <Drawer isActive={isMenuActive} onMaskClick={handleMaskClick}>
        <>
          <SC.NavigationLink to={MENU_ROUT}>Menu</SC.NavigationLink>
          <SC.NavigationLink to={REWARDS_ROUT}>Rewards</SC.NavigationLink>
          <SC.NavigationLink to={GIFT_ROUT}>Gift Cards</SC.NavigationLink>
          <SC.Separator />
          <SC.ButtonContainer>
            <Button text="Sign in" onClick={goToInternalLink(SIGN_IN_ROUT)} />
            <Button buttonStyle="secondary" text="Join now" onClick={goToInternalLink(REGISTRATION_ROUT)} />
          </SC.ButtonContainer>
          <SC.LocationContainer>
            <SC.NavigationLinkWithIcon to={STORE_LOCATOR_ROUT}>
              <Icon name="location" width="25px" height="25px" color={ICON_COLOR_SECONDARY} />
              <div>Find a store</div>
            </SC.NavigationLinkWithIcon>
          </SC.LocationContainer>
        </>
      </Drawer>
    </>
  );
};

export default React.memo(Header);
