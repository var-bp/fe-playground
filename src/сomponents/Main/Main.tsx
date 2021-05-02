import * as React from 'react';
import Container from '../Container';
import * as SC from './Main.style';

const Main: React.FC = ({children}) => {
  return (
    <SC.Main>
      <Container>{children}</Container>
    </SC.Main>
  );
};

export default Main;
