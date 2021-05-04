import * as React from 'react';
import * as SC from './Hamburger.style';

interface HamburgerProps {
  isActive: boolean;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

// https://jonsuh.com/hamburgers/

const Hamburger = ({isActive, onClick}: HamburgerProps): JSX.Element => {
  return (
    <SC.Button isActive={isActive} type="button" onClick={onClick}>
      <SC.Box>
        <SC.Inner isActive={isActive} />
        <SC.Circle />
      </SC.Box>
    </SC.Button>
  );
};

Hamburger.defaultProps = {
  isActive: false,
};

export default React.memo(Hamburger);
