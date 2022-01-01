import React, { MouseEventHandler } from 'react';
import { IconButton, styled } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import palette from '../../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';

const MRegisterHeaderBlock = styled('div')({
  color: `${palette.gray[4]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .title': {
    fontSize: 'large',
  },
});

const MRegisterHeader: React.FC = () => {
  const navigate = useNavigate();
  const handleClick: MouseEventHandler = () => {
    navigate(-1);
  };
  return (
    <MRegisterHeaderBlock>
      <IconButton onClick={handleClick}>
        <KeyboardArrowLeftIcon fontSize="large" />
      </IconButton>
      <div className="title">회원가입</div>
      <div />
    </MRegisterHeaderBlock>
  );
};

export default MRegisterHeader;
