import * as React from 'react';
import * as SC from './Button.style';

interface ButtonProps {
  text: string;
  buttonColor?: string;
  buttonStyle: 'primary' | 'secondary';
  onClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
}

const Button = ({text, buttonColor, buttonStyle, onClick}: ButtonProps): JSX.Element => {
  return (
    <SC.Button buttonStyle={buttonStyle} buttonColor={buttonColor} type="button" onClick={onClick}>
      {text}
    </SC.Button>
  );
};

Button.defaultProps = {
  buttonStyle: 'primary',
};

export default Button;
