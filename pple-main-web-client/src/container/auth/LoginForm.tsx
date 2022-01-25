import React from 'react';
import { useNavigate } from 'react-router-dom';
import MLoginBody from '../../components/auth/login/MLoginBody';
import { customAxios } from '../../lib/customAxios';
// /oauth2/authorization/kakao;
const LoginForm: React.FC = () => {
  const handleKakaoLogin = () => {
    location.href = 'http://ppledev.link/oauth2/authorization/kakao';
  };
  const handleAppleLogin = () => {
    console.log('AppleLogin');
  };
  return (
    <MLoginBody
      handleKakaoLogin={handleKakaoLogin}
      handleAppleLogin={handleAppleLogin}
    />
  );
};

export default LoginForm;
