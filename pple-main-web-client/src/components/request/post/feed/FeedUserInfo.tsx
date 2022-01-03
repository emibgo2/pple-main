import React from 'react';
import { styled, Avatar } from '@mui/material';
import NickNameWithBloodType from '../../../common/NickNameWithBloodType';

const FeedUserInfoBlock = styled('div')({
  height: '100%',
  display: 'flex',
  alignContent: 'center',
  marginTop:'17px',
  '& .first':{
      marginRight:"7.42px",
  }
});

const UserInfoBox = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'center',
  '& .time': {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10.7893px',
    lineHeight: '13px',
    letterSpacing: '0.01em',
    color: '#AEAEAE',
  },
});

interface UserInfo {
  nickname?: string;
  time?: string;
}

const FeedUserInfo: React.FC = () => {
  return (
    <FeedUserInfoBlock>
      <div className="first">
        <Avatar></Avatar>
      </div>
      <div className="seconde">
        <UserInfoBox>
          <NickNameWithBloodType nickname="에이호프" bloodType="AB+" />
          <div className="time">2021년 12월 13일 오전 7:30</div>
        </UserInfoBox>
      </div>
    </FeedUserInfoBlock>
  );
};

export default FeedUserInfo;
