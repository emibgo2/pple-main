import React from 'react';
import MyPageElementHeader from './MyPageElementHeader';
import Camera from '../../static/images/Camera.svg';
import { Avatar, Badge, Button, styled, TextField } from '@mui/material';
import palette from '../../lib/styles/palette';

const ModifyProfileBlock = styled('div')({
  height: '100%',
  '& .avatar': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
  },
  '& .help-text': {
    width: '100%',
    textAlign: 'center',
    color: '#B7B7B7',
  },
});
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  border: `1px solid #C4C4C4`,
  background: '#D8D8D8',
  padding: '5px',
  boxSizing: 'border-box',
}));

const StyledInput = styled(TextField)({
  width: '100%',
  marginTop: '25px',
  padding: '20px',
  boxSizing: 'border-box',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #B7B7B7',
    fontWeight: 'bold',
    fontSize: 'larger',
    '& fieldset': {
      color: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#FFFFFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF',
    },
  },
});

const StyledButton = styled(Button)({
  boxSizing: 'border-box',
  width: '28rem',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  background: `${palette.red[1]}`,
  color: 'white',
  padding: '20px 0px',
  fontWeight: 'bold',
  fontSize: '18px',
  '&:hover': {
    background: `${palette.red[1]}`,
  },
});

type ModifyProfileType = {
  displayName: string;
  onChange: any;
  profileImageUrl: string;
};

const ModifyProfile: React.FC<ModifyProfileType> = ({
  displayName,
  onChange,
  profileImageUrl,
}) => {
  return (
    <ModifyProfileBlock>
      <MyPageElementHeader title="프로필 수정" />
      <div className="avatar">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt="프로필 이미지 수정" src={Camera}></SmallAvatar>
          }
        >
          <Avatar
            src={profileImageUrl}
            sx={{ width: 118, height: 118 }}
            alt="프로필 이미지"
          />
        </Badge>
      </div>
      <StyledInput
        defaultValue={displayName}
        fullWidth
        inputProps={{ style: { textAlign: 'center' } }}
        name="displayName"
        onChange={onChange}
      />
      <div className="help-text">프로필 사진과 닉네임을 입력해주세요</div>
      <StyledButton type="submit">완료</StyledButton>
    </ModifyProfileBlock>
  );
};

export default ModifyProfile;
