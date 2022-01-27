import React from 'react';
import { styled, Avatar } from '@mui/material';
import NickNameWithBloodType from '../../../common/NickNameWithBloodType';

const FeedUserInfoBlock = styled('div')({
  height: '100%',
  display: 'flex',
  alignContent: 'center',
  marginTop: '17px',
  '& .first': {
    marginRight: '7.42px',
  },
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
  bloodType?: string;
  imgUrl?: string;
}

const createTimeFormat = (time: string) => {
  if (!time) {
    return '';
  }
  return `${time.slice(0, 4)}년 ${time.slice(5, 7)}월 ${time.slice(8, 10)}일`;
};

const FeedUserInfo: React.FC<UserInfo> = ({ nickname, time, bloodType }) => {
  return (
    <FeedUserInfoBlock>
      <div className="first">
        <Avatar></Avatar>
      </div>
      <div className="seconde">
        <UserInfoBox>
          <NickNameWithBloodType nickname={nickname} bloodType={bloodType} />
          <div className="time">{time ? createTimeFormat(time) : ''}</div>
        </UserInfoBox>
      </div>
    </FeedUserInfoBlock>
  );
};

export default FeedUserInfo;
