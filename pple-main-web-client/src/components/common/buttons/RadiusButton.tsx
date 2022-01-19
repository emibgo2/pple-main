import React from 'react';
import { styled, ButtonBase } from '@mui/material';

const StyledButton = styled(ButtonBase)({
  padding: '7px 16px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#FF6969',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FF6980',
    borderColor: '#FF6980',
    boxShadow: 'none',
  },
  fontWeight: 'bold',
});

interface Props {
  text: string;
  onClick?: any;
}

const RadiusButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </div>
  );
};

export default RadiusButton;
