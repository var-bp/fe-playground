import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import {BACKGROUND_COLOR_PRIMARY, TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY} from '../../constants/colors';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD} from '../../constants/typography';
import {LINK_TRANSITION} from '../../constants/transitions';
import setColor from '../../utils/setColor';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_PRIMARY)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.06),
    0px 0px 2px 0px rgba(0, 0, 0, 0.07);
`;

export const LogotypeLink = styled(Link)`
  display: flex;
  margin-right: 40px;
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: block;
  padding: 10px 15px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme}) => setColor(theme.name, TEXT_COLOR_PRIMARY)};
  transition: color ${LINK_TRANSITION};
  text-transform: uppercase;
  text-decoration: none;

  &.active,
  &:hover {
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_SECONDARY)};
  }
`;
