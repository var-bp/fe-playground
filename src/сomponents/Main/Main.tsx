import * as React from 'react';
import Container from '../Container';

const Main: React.FC = ({children}) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
