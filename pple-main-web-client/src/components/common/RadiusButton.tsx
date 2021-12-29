import React from 'react';
import { styled } from '@mui/material'; 
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
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
});

interface Props{
  text: string,
}

const ChattingButton:React.FC<Props> = ({text}) => {
    return (
        <div>
            <StyledButton>
                {text}
            </StyledButton>
        </div>
    );
};

export default ChattingButton;