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

const MRegisterBodyBlock = styled('div')({
  padding: '0px 1rem',
  boxSizing:"border-box",
  width: '100%',
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
    </MRegisterBodyBlock>
  );
};

export default MRegisterBody;
