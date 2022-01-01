import React from 'react';
import { styled } from '@mui/material';

const MRegisterTemplateBlock = styled('div')({
    padding:"1rem", 
})

const MRegisterTemplate: React.FC = ({ children }) => {
  return <MRegisterTemplateBlock>{children}</MRegisterTemplateBlock>;
};

export default MRegisterTemplate;
