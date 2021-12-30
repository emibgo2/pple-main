import React from 'react';
import { Button, styled } from '@mui/material';

interface ButtonProps {
  colors: string;
}

const StyledButton = styled(Button)({
    borderRadius: "15px",
    fontWeight:"bold",
    textAlign:"center",
});

interface Style {
  backgroundColor?: string;
  textColor?: string;
  text: string;
  padding?: string,
}

const SquareButton: React.FC<Style> = ({ backgroundColor, textColor,text,padding }) => {
  return (
    <>
      <StyledButton
        variant="contained"
        sx={{
          backgroundColor: 
            backgroundColor ? `${backgroundColor}` : '#FF6969',
            color: textColor ? `${textColor}` : 'white',
        }}
      >
          {text}
      </StyledButton>
    </>
  );
};

export default SquareButton;
