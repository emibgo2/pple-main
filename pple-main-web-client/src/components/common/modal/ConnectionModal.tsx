import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Phone from '../../../lib/images/modal/Phone.svg';
import Check from '../../../lib/images/modal/Check.svg';

const StyledModal = styled(Modal)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
const StyledPaper = styled(Paper)({
  borderRadius: '20px',
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
});
const PhoneBox = styled('div')({
    width:"100%",
    textAlign:"center",
});

const ConnectionModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={onClick}>모달테스트</button>
      <StyledModal isOpen={open}>
        <CloseBox>
          <IconButton onClick={onClick}>
            <CloseIcon style={{ color: '#C7C7C7' }} />
          </IconButton>
        </CloseBox>

        <ImageBox>
          <img src={Phone} alt="수혈자와 연락" width={90} height={90} />
        </ImageBox>

        <TitleBox>
          수혈자와 연락을 통해
          <br />
          헌혈을 진행해보세요
        </TitleBox>
        <ContentBox>지정헌혈도움 이외의 대화는<br/>삼가해주세요</ContentBox>
        <PhoneBox>010-5047-7361</PhoneBox>
      </StyledModal>
    </>
  );
};

export default ConnectionModal;
