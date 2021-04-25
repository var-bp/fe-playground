import * as React from 'react';
import {Grid} from './Container.style';

const Container: React.FC = ({children}) => {
  return <Grid>{children}</Grid>;
};

export default Container;
