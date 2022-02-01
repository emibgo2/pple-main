import React from 'react';
import { ButtonBase, styled } from '@mui/material';
import palette from '../../../lib/styles/palette';
import kakaoLoginImg from '../../../static/images/login/kakao_login_large_wide (1).png';
import applelogImg from '../../../static/images/login/Logo - SIWA - Logo-only - White.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const MLoginBodyBlock = styled('div')({
  width: '100%',
  textAlign: 'center',
});

const LoginButton = styled(ButtonBase)({
  width: '100%',
  '& div': {
    width: '100%',
  },
  '& .apple': {
    display: 'flex',
    alignItem: 'center',
    color: 'white',
    width: '100%',
    height: 'auto',
    backgroundColor: 'black',
    borderRadius: '12px',
  },
  '& .apple-login-text': {
    width: '100%',
    fontSize: '20px',
    marginTop: '19px',
    paddingRight: '24px',
  },
});

const StartWithoutLogin = styled(ButtonBase)({
  color: `${palette.gray[1]}`,
  marginTop: '1rem',
});

const ImageSrc = styled('img')({
  width: '100%',
  height: 'auto',
  // backgroundSize: 'fill',
  // boxSizing: 'border-box',
});

interface Props {
  handleKakaoLogin?: React.MouseEventHandler;
  handleAppleLogin?: React.MouseEventHandler;
}

const MLoginBody: React.FC<Props> = ({
  handleKakaoLogin,
  handleAppleLogin,
}) => {
  const navigate = useNavigate();
  const handleWithoutLogin: React.MouseEventHandler = () => {
    navigate('/');
  };
  return (
    <MLoginBodyBlock>
      <LoginButton onClick={handleKakaoLogin}>
        <div>
          <ImageSrc src={kakaoLoginImg} alt="카카오로 시작하기" />
        </div>
      </LoginButton>
      {/* <LoginButton onClick={handleAppleLogin}>
        <div className="apple">
          <img src={applelogImg} alt="애플 계정으로 시작하기" />
          <div className="apple-login-text">애플계정으로 시작하기</div>
        </div>
      </LoginButton> */}
      <StartWithoutLogin onClick={handleWithoutLogin}>
        <span>로그인 없이 시작하기</span>
        <ChevronRightIcon />
      </StartWithoutLogin>
    </MLoginBodyBlock>
  );
};

export default MLoginBody;
