import React from 'react';
import { styled } from '@mui/material';
import { width } from '@mui/system';

const MLoginTemplateBlock = styled('div')({
    padding: '0px 1rem', 
    width:"100%",
    height:"100vh",
    boxSizing:"border-box",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignContent:"center"
})

const MLoginTemplate: React.FC = ({children}) => {
    return (
        <MLoginTemplateBlock>
            {children}
        </MLoginTemplateBlock>
    );
};

export default MLoginTemplate;