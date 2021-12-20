import React from 'react';
import icon from '../../lib/images/Ellipse 2.png';
import styled from 'styled-components';
import kakaoLoginImg from '../../lib/images/login/kakao_login_medium_wide.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LoginHeader = styled.div`
& div{
    margin-bottom:20px;
}
& h1{
    font-size:x-large;
    color:gray;
    box-sizing : border-box;
}
& h2{
    font-size:small;
    color:gray;   
    margin:20px 0px 60px 0px;
}
`;

const LoginBox = styled.div`
  width: 100%;
  & div {
      margin-bottom : 10px;
  }
`;

const LoginFooter = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:small;
    color:gray;
    margin-top:100px;
`;

const LoginForm = () => {

  return (
    <div>
      <LoginHeader>
        <div>
          <img src={icon} alt="아이콘" width={50} height={50}/>
        </div>
        <h1>안녕하세요</h1>
        <h1>세상을 구하는 모임 피플입니다</h1>
        <h2>회원 서비스 이용을 위해 로그인을 해주세요</h2>
      </LoginHeader>
      <LoginBox>
          <div className='kakao-login'><img src={kakaoLoginImg} alt="카카오 로그인" width={337}/></div>
          <div className='apple-login'><img src={kakaoLoginImg} alt="애플 로그인" width={337}/> </div>
      </LoginBox>
      <LoginFooter>
          <div>로그인 없이 시작하기</div>
          <ChevronRightIcon/>
      </LoginFooter>
    </div>
  );
};

export default LoginForm;
