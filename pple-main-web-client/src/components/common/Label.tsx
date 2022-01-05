import React from 'react';
import { styled } from '@mui/material';
const LabelBlock = styled('div')({
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  fontSize: 'smaller',
});
const Label: React.FC = ({children}) => {
    return (
        <LabelBlock>
            {children}
        </LabelBlock>
    );
};

export default Label;