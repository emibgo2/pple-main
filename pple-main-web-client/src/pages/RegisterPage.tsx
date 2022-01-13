import React from 'react';
import {styled}from'@mui/material';
import MRegisterTemplate from '../components/auth/register/MRegisterTemplate';  
import MRegisterHeader from '../components/auth/register/MRegisterHeader';
import RegisterForm from '../container/auth/RegisterForm';

const RegisterPage: React.FC = () => {
    return (
        <MRegisterTemplate>
          <MRegisterHeader />
          <RegisterForm />
        </MRegisterTemplate>
    );
};

export default RegisterPage;