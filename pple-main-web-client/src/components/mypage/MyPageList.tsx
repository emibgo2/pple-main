import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import task from '../../lib/images/mypage-button/task.png';
import edit from '../../lib/images/mypage-button/edit.png';
import heartSearch from '../../lib/images/mypage-button/heart-search.png';
import heart from '../../lib/images/mypage-button/Heart.png';
import messageQuestion from '../../lib/images/mypage-button/message-question.png';
import shieldTick from '../../lib/images/mypage-button/shield-tick.png';
import { useNavigate } from 'react-router-dom';

const DIVIDER = styled('div')({
  backgroundColor: '#F4F4F4',
  width: '100%',
  height: '9px',
});

const List1 = styled(List)({});

const List2 = styled(List)({});

const MyPageList: React.FC = () => {
  const navigate = useNavigate();
  const handleFaq = () => {
    navigate('/page/faq');
  };
  const handleHelper = () => {
    navigate('/page/helper');
  };
  const handleStory = () => {
    navigate('/page/story');
  };
  const handleDonation = () => {
    navigate('/etc/1');
  };
  const handlePolicy = () => {
    navigate('/etc/2');
  };
  const handleService = () => {
    navigate('/etc/3');
  };
  return (
    <div>
      <DIVIDER />
      <List1>
        {/* <ListItemButton onClick={handleHelper}>
          <ListItemIcon>
            <img src={heart} alt="도움을 주신 분들" />
          </ListItemIcon>
          <ListItemText primary="도움을 주신 분들" />
        </ListItemButton> */}
        <ListItemButton onClick={handleStory}>
          <ListItemIcon>
            <img src={edit} alt="나의 사연" />
          </ListItemIcon>
          <ListItemText primary="나의 사연" />
        </ListItemButton>
        <ListItemButton onClick={handleFaq}>
          <ListItemIcon>
            <img src={messageQuestion} alt="FAQ" />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </ListItemButton>
      </List1>
      <DIVIDER />
      <List2>
        <ListItemButton onClick={handleDonation}>
          <ListItemIcon>
            <img src={heartSearch} alt="지정헌혈이란" />
          </ListItemIcon>
          <ListItemText primary="지정헌혈이란" />
        </ListItemButton>
        <ListItemButton onClick={handlePolicy}>
          <ListItemIcon>
            <img src={shieldTick} alt="개인정보 처리방침" />
          </ListItemIcon>
          <ListItemText primary="개인정보 처리방침" />
        </ListItemButton>
        <ListItemButton onClick={handleService}>
          <ListItemIcon>
            <img src={task} alt="서비스 이용약관" />
          </ListItemIcon>
          <ListItemText primary="서비스 이용약관" />
        </ListItemButton>
      </List2>
    </div>
  );
};

export default MyPageList;
