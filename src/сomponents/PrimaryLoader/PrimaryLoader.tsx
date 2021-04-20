import * as React from 'react';
import {Container, Spanned, CoffeeCup} from './PrimaryLoader.style';

const PrimaryLoader = (): JSX.Element => {
  return (
    <Container>
      <Spanned>
        <CoffeeCup />
      </Spanned>
    </Container>
  );
};

export default PrimaryLoader;
