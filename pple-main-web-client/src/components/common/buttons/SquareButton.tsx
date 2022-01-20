import React, { MouseEventHandler } from 'react';
import { Button, styled } from '@mui/material';

interface ButtonProps {
  colors: string;
}

const StyledButton = styled(Button)({
  borderRadius: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
});

interface Style {
  backgroundColor?: string;
  textColor?: string;
  text: string;
  padding?: string;
  onClick?: MouseEventHandler;
  type: 'button' | 'submit' | 'reset';
}

const SquareButton: React.FC<Style> = ({
  backgroundColor,
  textColor,
  text,
  padding,
  type,
  onClick,
}) => {
  return (
    <>
      <StyledButton
        variant="contained"
        sx={{
          backgroundColor: backgroundColor ? `${backgroundColor}` : '#FF6969',
          color: textColor ? `${textColor}` : 'white',
        }}
        onClick={onClick}
        type={type}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default SquareButton;
