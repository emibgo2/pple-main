import React, { MouseEventHandler } from 'react';
import { IconButton, styled } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const HeaderBlock = styled('div')({
  display: 'flex',
  alignContent: 'center',
  padding: '12px 0px 12px 14px',
  background: 'linear-gradient(109.4deg, #FF6969 -3.19%, #FF3333 109.95%)',
  color: 'white',
  fontWeight: 'bold',
  '& .icon': {
    width: '40%',
  },
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


const MyPageHeader: React.FC = () => {
  const navigate = useNavigate();
  const handleBack: MouseEventHandler = () => {
    navigate(-1);
  };
  return (
    <HeaderBlock>
      <div className="icon">
        <IconButton sx={{ color: 'white' }} onClick={handleBack}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
      </div>

      <div className="title">마이페이지</div>
    </HeaderBlock>
  );
};

export default MyPageHeader;
