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
import Hamburger from './Hamburger';
import * as SC from './Header.style';

const Header = (): JSX.Element => {
  const {push} = useHistory();
  const {pathname} = useLocation();

  const [isOpen, setIsOpen] = React.useState(false);

  const goToInternalLink = React.useCallback(
    (link: string) => () => {
      push(link);
    },
    [push],
  );

  return (
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
          </SC.NavigationLinks>
          <SC.Controls>
            <SC.NavigationLinkWithIcon to={STORE_LOCATOR_ROUT}>
              <Icon name="location" width="25px" height="25px" color={ICON_COLOR_SECONDARY} />
              <div>Find a store</div>
            </SC.NavigationLinkWithIcon>
            {pathname !== SIGN_IN_ROUT && <Button text="Sign in" onClick={goToInternalLink(SIGN_IN_ROUT)} />}
            {pathname !== REGISTRATION_ROUT && (
              <Button buttonStyle="secondary" text="Join now" onClick={goToInternalLink(REGISTRATION_ROUT)} />
            )}
            <Hamburger
              isActive={isOpen}
              onClick={() => {
                setIsOpen(s => !s);
              }}
            />
          </SC.Controls>
        </SC.Panel>
      </Grid>
    </SC.Header>
  );
};

export default React.memo(Header);
