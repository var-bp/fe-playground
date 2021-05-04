import * as React from 'react';
import * as SC from './PrimaryLoader.style';

const PrimaryLoader = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Spanned>
        <SC.CoffeeCup />
      </SC.Spanned>
    </SC.Container>
  );
};

export default React.memo(PrimaryLoader);
