import React from 'react';
import MyPageElementHeader from '../MyPageElementHeader';
import { styled } from '@mui/material';

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});

const TermsOfService: React.FC = () => {
  return (
    <>
      <MyPageElementHeader title="서비스 이용약관" />
      <Divider />
      <pre>서비스 이용약관 내용</pre>
    </>
  );
};

export default TermsOfService;
