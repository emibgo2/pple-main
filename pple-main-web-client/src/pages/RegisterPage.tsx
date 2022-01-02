import React from 'react';
import {styled}from'@mui/material';
import MRegisterTemplate from '../components/auth/register/MRegisterTemplate';  
import MRegisterHeader from '../components/auth/register/MRegisterHeader';
import MRegisterBody from '../components/auth/register/MRegisterBody';

const RegisterPage: React.FC = () => {
    return (
        <MRegisterTemplate>
          <MRegisterHeader />
          <MRegisterBody />
        </MRegisterTemplate>
    );
};

export default RegisterPage;