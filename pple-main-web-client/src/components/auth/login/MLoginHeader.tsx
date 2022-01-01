import React from 'react';
import { styled } from '@mui/material';
import appLogo from '../../../lib/images/logo.svg';

const MLoginHeaderBlock = styled('div')({
    // marginTop:"11.375rem",
    "& .app-logo":{
        marginBottom:"1rem",
    },
    "& .login-title":{
        fontSize : "large",
        lineHeight : "1.3rem",
    }
});

const MLoginHeader: React.FC = () => {
    return (
      <MLoginHeaderBlock>
        <div className="app-logo">
          <img src={appLogo} alt="앱로고" />
        </div>
        <div className="login-title">
          <p>
            안녕하세요
            <br />
            세상을 바꾸는 모임, 피플입니다
          </p>
        </div>
      </MLoginHeaderBlock>
    );
};

export default MLoginHeader;