import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import {
  BACKGROUND_COLOR_PRIMARY,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
  ICON_COLOR_TERTIARY,
} from '../../constants/colors';
import {MEDIA_QUERY} from '../../constants/grid-breakpoints';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_BOLD, FONT_WEIGHT_DEMI_BOLD} from '../../constants/typography';
import {LINK_TRANSITION, ICON_TRANSITION} from '../../constants/transitions';
import setColor from '../../utils/setColor';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${({theme}) => setColor(theme.name, BACKGROUND_COLOR_PRIMARY)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.06),
    0px 0px 2px 0px rgba(0, 0, 0, 0.07);
  z-index: 101;

  ${MEDIA_QUERY.lessThan('lg')`
    padding-top: 15px;
    padding-bottom: 15px;
  `}
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogotypeLink = styled(Link)`
  display: flex;
  margin-right: 40px;
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
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

export const NavigationLinkWithIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  > div {
    margin-left: 4px;
    font-family: ${FONT_FAMILY_PRIMARY};
    font-weight: ${FONT_WEIGHT_DEMI_BOLD};
    font-size: 14px;
    line-height: 1.5;
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_PRIMARY)};
    transition: color ${ICON_TRANSITION};
  }

  > svg {
    transition: fill ${ICON_TRANSITION};
  }

  &.active > div,
  &:hover > div {
    color: ${({theme}) => setColor(theme.name, TEXT_COLOR_SECONDARY)};
  }

  &.active > svg,
  &:hover > svg {
    fill: ${({theme}) => setColor(theme.name, ICON_COLOR_TERTIARY)};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  > button:first-of-type {
    margin-left: 40px;
  }

  > button:not(:first-of-type) {
    margin-left: 15px;
  }
`;

export const Separator = styled.div`
  margin: 15px 15px 30px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-bottom: 30px;

  > button:not(:first-of-type) {
    margin-left: 15px;
  }
`;

export const LocationContainer = styled.div`
  padding-left: 15px;
  padding-bottom: 30px;
`;
