import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Coin from '../../../lib/images/modal/Coin.svg';
import { useNavigate } from 'react-router-dom';

const StyledModal = styled(Modal)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const StyledPaper = styled(Paper)({
  borderRadius: '20px',
  paddingBottom: '30px',
});

const CloseBox = styled('div')({
  width: '100%',
  textAlign: 'end',
});

const ImageBox = styled('div')({
  textAlign: 'center',
  marginBottom: '15px',
});

const TitleBox = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '22px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#222222',
  marginBottom: '10px',
});

const ContentBox = styled('div')({
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '150%',
  textAlign: 'center',
  color: '#B7B7B7',
  padding: '0px 38px',
  minWidth: '280px',
  '&:hover':{
      cursor:"pointer",
  }
});

const LoginRequestModal: React.FC = () => {
  const navigate = useNavigate(); 
    const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const goLogin = () =>{
      navigate('/login');
  }
  return (
    <>
      <button onClick={onClick}></button>
      <StyledModal isOpen={open}>
        <StyledPaper elevation={1}>
          <CloseBox>
            <IconButton onClick={onClick}>
              <CloseIcon style={{ color: '#C7C7C7' }} />
            </IconButton>
          </CloseBox>
          <ImageBox>
            <img src={Coin} alt="연장하기 완료" width={90} height={90} />
          </ImageBox>
          <TitleBox>
            로그인 후<br /> 헌혈 서비스를 이용해보세요
          </TitleBox>
          <ContentBox
            onClick={goLogin}
          >
            <u>로그인 하기</u>
          </ContentBox>
        </StyledPaper>
      </StyledModal>
    </>
  );
};

export default LoginRequestModal;
