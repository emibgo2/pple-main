import React, { MouseEventHandler } from 'react';
import { IconButton, styled } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Chat from '../../lib/images/mobile-gnb/Chat.png';
import Edit from '../../lib/images/mobile-gnb/Edit.svg';
import Search from '../../lib/images/mobile-gnb/Search.png';
import { useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/palette';
const MobileGNBBlock = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: `linear-gradient(109.4deg, #FF6969 -3.19%, #FF3333 109.95%);`,
});

interface Props {
  isBack?: boolean;
  title: string;
  isSearch?: boolean;
  isWrite?: boolean;
  isChat?: boolean;
}

const MobileGNB: React.FC<Props> = ({
  isBack,
  title,
  isSearch,
  isWrite,
  isChat,
}) => {
  const navigate = useNavigate();
  const handleBack: MouseEventHandler = () => {
    navigate(-1);
  };
  const goPostRegister: MouseEventHandler = () => {
    navigate('/post/register');
  };
  return (
    <MobileGNBBlock>
      {isBack ? (
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
      ) : (
        <></>
      )}
      <div>{title}</div>
      {isSearch ? (
        <IconButton onClick={goPostRegister}>
          <img src={Search} alt="검색" />
        </IconButton>
      ) : (
        <></>
      )}
      {isWrite ? (
        <IconButton onClick={goPostRegister}>
          <img src={Edit} alt="검색" />
        </IconButton>
      ) : (
        <></>
      )}
      {isChat ? (
        <IconButton onClick={goPostRegister}>
          <img src={Chat} alt="검색" />
        </IconButton>
      ) : (
        <></>
      )}
    </MobileGNBBlock>
  );
};

export default MobileGNB;
