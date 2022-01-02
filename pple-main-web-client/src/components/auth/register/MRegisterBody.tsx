import React, { useEffect, useState } from 'react';
import palette from '../../../lib/styles/palette';
import {
  styled,
} from '@mui/material';
import BirthForm from './input/BirthForm';
import GenderInput from './input/GenderInput';
import BloodTypeInput from './input/BloodTypeInput';
import TermsInput from './input/TermsInput';
import PhoneInput from './input/PhoneInput';
import NicknameInput from './input/NicknameInput';
import RegisterButton from './input/RegisterButton';

const MRegisterBodyBlock = styled('div')({
  height:"100%",
  padding: '0px 1rem 44px 1rem',
  boxSizing:"border-box",
  width: '100%',
  display:"flex",
  marginTop:"2rem",
  flexDirection:"column",
  alignContent:"center",
  justifyContent:"space-between",
});



const MRegisterBody: React.FC = () => {
  
  return (
    <MRegisterBodyBlock>
      <NicknameInput/>
      <BirthForm />
      <GenderInput />
      <BloodTypeInput/>
      <PhoneInput/>
      <TermsInput/>
      <RegisterButton/>
    </MRegisterBodyBlock>
  );
};

export default MRegisterBody;
