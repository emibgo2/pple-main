import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
    );
};

export default LoginPage;