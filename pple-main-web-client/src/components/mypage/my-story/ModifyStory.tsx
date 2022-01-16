import React from 'react';
import { ButtonBase, styled, TextField } from '@mui/material';
import MyPageElementHeader from '../MyPageElementHeader';
import BloodDonationType from '../../common/input/BloodDonationType';
import BloodTypeGroup from '../../common/input/BloodTypeGroup';
import PhoneInput from '../../common/input/PhoneInput';

const Block = styled('div')({
  height:"100%",
})

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});

const InputBlock = styled('div')({
  padding: '17px',
  display:'flex',
  flexDirection:'column',
  '& #title': {
    fontSize: 'large',
    color: '#222222',
    fontWeight: 'bold',
  },
});

const ModifyButton = styled(ButtonBase)({
  width:"100%",
  background:"#FF6969",
  boxSizing:"border-box",
  color:"white",
  fontWeight:"bold",
  fontSize:"18px",
  padding:"20px 0px",
  position:"fixed",
  bottom:"0",
})

const ModifyStory: React.FC = () => {
  return (
    <Block>
      <MyPageElementHeader title="정보수정" />
      <Divider />
      <InputBlock>
        <TextField
          id="title"
          variant="standard"
          name="request-title"
          placeholder="제목"
        />
        <TextField
          multiline
          rows={6}
          placeholder="내용"
          variant="standard"
          name="request-content"
        />
        <BloodTypeGroup />
        <BloodDonationType />
        <PhoneInput />
      </InputBlock>
      <ModifyButton>수정 완료</ModifyButton>
    </Block>
  );
};

export default ModifyStory;
