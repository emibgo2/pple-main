import { Avatar, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileBlock = styled('div')({
  padding: '20px',
});
const ProfileBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& .MuiAvatar-root': {
    marginRight: '21px',
  },
  marginBottom: '20px',
});
const NameBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '6px',
  '& .nick-name': {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.03em',
    color: '#222222',
  },
  '& .blood-type': {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    margin: ' 0px 10px',
    background: '#FF6969',
    borderRadius: '10px',
    padding: '1.5px 7px',
  },
});

const CountBox = styled('div')({});
const EditProfileButton = styled(ButtonBase)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  background: '#FFFFFF',
  border: '1px solid #B7B7B7',
  boxSizing: 'border-box',
  borderRadius: '15px',
});
const Profile: React.FC = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/page/modify');
  };
  return (
    <ProfileBlock>
      <ProfileBox>
        <Avatar></Avatar>
        <div>
          <NameBox>
            <div className="nick-name">지니지니</div>
            <div className="blood-type">B+</div>
          </NameBox>
          <CountBox>오늘까지 총 16번 헌혈하셨습니다!</CountBox>
        </div>
      </ProfileBox>

      <EditProfileButton onClick={onClick}>프로필 수정</EditProfileButton>
    </ProfileBlock>
  );
};

export default Profile;
