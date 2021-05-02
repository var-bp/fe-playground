import * as React from 'react';
import {ICON_COLOR_PRIMARY, BACKGROUND_COLOR_PRIMARY} from '../../constants/colors';
import {HOME_ROUT, MENU_ROUT, REWARDS_ROUT, GIFT_ROUT} from '../../constants/routs';
import Container from '../Container';
import Icon from '../Icon';
import * as SC from './Header.style';

const Header = (): JSX.Element => {
  return (
    <SC.Header>
      <Container>
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
      </Container>
    </SC.Header>
  );
};

export default Header;
