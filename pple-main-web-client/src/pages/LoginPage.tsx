import React from 'react';
import MLoginTemplate from '../components/auth/login/MLoginTemplate';
import MLoginHeader from '../components/auth/login/MLoginHeader';   
import MLoginBody from '../components/auth/login/MLoginBody';
import LoginForm from '../container/auth/LoginForm';
const LoginPage: React.FC = () => {
    return (
        <MLoginTemplate>
            <MLoginHeader/>
            <LoginForm/>
        </MLoginTemplate>
    );
};

export default LoginPage;