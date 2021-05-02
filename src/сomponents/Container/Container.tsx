import * as React from 'react';
import * as SC from './Container.style';

const Container: React.FC = ({children}) => {
  return <SC.Grid>{children}</SC.Grid>;
};

export default Container;
