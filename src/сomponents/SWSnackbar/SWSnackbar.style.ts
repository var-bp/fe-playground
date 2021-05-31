import styled from 'styled-components';
import {FONT_FAMILY_PRIMARY, FONT_WEIGHT_REGULAR} from '../../constants/typography';
import {
  TEXT_COLOR_SENARY,
  BACKGROUND_COLOR_SEPTENARY,
  BUTTON_COLOR_QUATERNARY,
  BUTTON_COLOR_QUINARY,
} from '../../constants/colors';
import {BUTTON_TRANSITION, ELEMENT_APPEARANCE_TRANSITION} from '../../constants/transitions';

export const Container = styled.div`
  display: none;
  opacity: 0;
  position: fixed;
  left: 15px;
  bottom: 15px;
  transition: opacity ${ELEMENT_APPEARANCE_TRANSITION};
  z-index: 100;
`;

export const Surface = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${BACKGROUND_COLOR_SEPTENARY};
`;

export const Label = styled.div`
  padding: 14px 16px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-size: 14px;
  line-height: 1.43;
  color: ${TEXT_COLOR_SENARY};
`;

export const Action = styled.div`
  padding: 14px 16px;
  font-family: ${FONT_FAMILY_PRIMARY};
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-size: 14px;
  line-height: 1.43;
  text-transform: uppercase;
  color: ${BUTTON_COLOR_QUATERNARY};
  cursor: pointer;
  transition: color ${BUTTON_TRANSITION};

  &:hover {
    color: ${BUTTON_COLOR_QUINARY};
  }
`;
