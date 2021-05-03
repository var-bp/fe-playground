import * as React from 'react';
import * as SC from './Grid.style';

const Grid: React.FC = ({children}) => {
  return <SC.Grid>{children}</SC.Grid>;
};

export default Grid;
