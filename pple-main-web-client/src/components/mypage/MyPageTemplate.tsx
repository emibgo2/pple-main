import React from 'react';
import { styled } from '@mui/material';

const MyPageTemplateBlock = styled('div')({});

const MyPageTemplate: React.FC = ({children}) => {
    return (
        <MyPageTemplateBlock>
            {children}
        </MyPageTemplateBlock>
    );
};

export default MyPageTemplate; 