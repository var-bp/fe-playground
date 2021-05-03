import * as React from 'react';
import Grid from '../Grid';
import * as SC from './Footer.style';

const getFullYear = (): number => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = (): JSX.Element => {
  return (
    <SC.Footer>
      <Grid>
        <small>&copy; Copyright {getFullYear()}, Example Corporation</small>
      </Grid>
    </SC.Footer>
  );
};

export default Footer;
