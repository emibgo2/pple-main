import React, { MouseEventHandler } from 'react';
import { IconButton, styled } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const HeaderBlock = styled('div')({
  display: 'flex',
  alignContent: 'center',
  padding: '12px 0px 12px 14px',
  '& .icon': {
    width: '40%',
  },
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

interface Props {
  isBack?: boolean;
  title: string;
}

const MyPageHeader: React.FC<Props> = ({ isBack, title }) => {
  const navigate = useNavigate();
  const handleBack: MouseEventHandler = () => {
    navigate(-1);
  };
  return (
    <HeaderBlock
      sx={{
        background:
          title != '마이페이지'
            ? 'white'
            : 'linear-gradient(109.4deg, #FF6969 -3.19%, #FF3333 109.95%)',
      }}
    >
      {isBack ? (
        <div className='icon'>
          <IconButton sx={{ color: 'white' }} onClick={handleBack}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        </div>
      ) : (
        <div></div>
      )}
      <div style={{ color:
          title != '마이페이지'
            ? '#222222'
            : 'white', fontWeight: 'bold' }}
            className='title'
            >{title}</div>
    </HeaderBlock>
  );
};

export default MyPageHeader;
