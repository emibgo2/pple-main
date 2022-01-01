import React from 'react';
import MLoginTemplate from '../components/auth/login/MLoginTemplate';
import MLoginHeader from '../components/auth/login/MLoginHeader';   
import MLoginBody from '../components/auth/login/MLoginBody';
const LoginPage: React.FC = () => {
    return (
        <MLoginTemplate>
            <MLoginHeader/>
            <MLoginBody/>
        </MLoginTemplate>
    );
};

export default LoginPage;