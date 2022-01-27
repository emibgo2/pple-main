import React from 'react';
import MyPageElementHeader from '../MyPageElementHeader';
import { styled } from '@mui/material';

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <MyPageElementHeader title="개인정보 처리방침" />
      <Divider />
      <pre>개인정보 처리방침 내용</pre>
    </>
  );
};

export default PrivacyPolicy;
