import * as React from 'react';
import Container from '../Container';
import * as SC from './Footer.style';

const Footer = (): JSX.Element => {
  return (
    <SC.Footer>
      <Container>
        <div style={{paddingBottom: '24px', paddingTop: '24px'}} />
      </Container>
    </SC.Footer>
  );
};

export default Footer;
