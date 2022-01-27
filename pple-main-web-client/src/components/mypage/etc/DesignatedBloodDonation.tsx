import React from 'react';
import { styled } from '@mui/material';
import MyPageElementHeader from '../MyPageElementHeader';

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});

const DesignatedBloodDonation: React.FC = () => {
  return (
    <>
      <MyPageElementHeader title="지정헌혈이란" />
      <Divider />
      <pre>지정헌혈 내용</pre>
    </>
  );
};

export default DesignatedBloodDonation;
