import React from 'react';
import { useNavigate } from 'react-router-dom';
import MLoginBody from '../../components/auth/login/MLoginBody'
import { customAxios } from '../../lib/customAxios';
import * as CONFIG from '../../config';
// /oauth2/authorization/kakao;
const LoginForm: React.FC = () => {
    const navigate = useNavigate(); 

    const handleKakaoLogin = () =>{
        location.href = CONFIG.BASE_URL + '/oauth2/authorization/kakao';
    }
    const handleAppleLogin = () =>{
        console.log("AppleLogin");
    }
    return (
      <MLoginBody
        handleKakaoLogin={handleKakaoLogin}
        handleAppleLogin={handleAppleLogin}
      />
    );
};

export default LoginForm;