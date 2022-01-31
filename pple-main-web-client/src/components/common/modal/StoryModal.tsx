import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Clock from '../../../lib/images/modal/Clock.svg';
import ModalButton from './ModalButton';
import '../../../static/fonts/fonts.css';
const StyledModal = styled(Modal)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontFamily: 'Pretendard',
});

const StylePaper = styled(Paper)({
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
  minWidth: '280px',
  marginBottom: '25px',
});
const ButtonBox = styled('div')({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 25px 25px 25px',
});

const StoryModal = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <button onClick={onClick}>모달 테스트</button>
      <StyledModal isOpen={open}>
        <StylePaper elevation={2}>
          {/* 닫기 버튼 */}
          <CloseBox>
            <IconButton onClick={onClick}>
              <CloseIcon style={{ color: '#C7C7C7' }} />
            </IconButton>
          </CloseBox>
          {/* 이미지 영억 */}
          <ImageBox>
            <img src={Clock} alt="시계 이미지" width={90} height={90} />
          </ImageBox>
          {/* 제목 */}
          <TitleBox>
            사연을 올린 기간이 <br /> 5일을 경과했어요
          </TitleBox>
          <ContentBox>
            사연을 연장하거나
            <br /> 사연을 내리고 감사의 메세지를 전달하세요
          </ContentBox>
          <ButtonBox>
            <ModalButton
              onClick={onClick}
              text="내리기"
              background="#F4F4F4"
              color="#B7B7B7"
            />
            <ModalButton onClick={onClick} text="연장하기" />
          </ButtonBox>
        </StylePaper>
      </StyledModal>
    </>
  );
};

export default StoryModal;
