import React, { ChangeEventHandler, useEffect, useState } from 'react';
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
import NameInput from './input/NameInput';

const MRegisterBodyBlock = styled('div')({
  height:"100%",
  padding: '0px 1rem 44px 1rem',
  boxSizing:"border-box",
  width: '100%',
  display:"flex",
  marginTop:"2rem",
  flexDirection:"column",
  alignContent:"center",
});

interface IUser {
  name: string;
  nickname: string;
  year: string;
  month: string;
  day: string;
  gender: string;
  blood: {
    rh: string;
    abo: string;
  };
  phone: {
    first: string;
    second: string;
    third: string;
  };
}

interface IRegister {
  user: IUser;
  // 이벤트 형식 수정
  onChange: any;
  handlePhoneNumber: any;
  handleBloodType: any;
  handleRh : any; 
}

const MRegisterBody: React.FC<IRegister> = ({
  user,
  onChange,
  handlePhoneNumber,
  handleBloodType,
  handleRh
}) => {
  const { name, nickname, year, month, day, gender, blood, phone } = user;
  const onTestClick = () => {
    console.log(user);
  };
  return (
    <MRegisterBodyBlock>
      <NameInput name={name} onChange={onChange} />
      <NicknameInput nickname={nickname} onChange={onChange} />
      <BirthForm year={year} month={month} day={day} onChange={onChange} />
      <GenderInput gender={gender} onChange={onChange} />
      <BloodTypeInput
        blood={blood}
        handleBloodType={handleBloodType}
        handleRh={handleRh}
      />
      <PhoneInput phone={phone} handlePhoneNumber={handlePhoneNumber} />
      <TermsInput />
      <RegisterButton />
      <button onClick={onTestClick}>test</button>
    </MRegisterBodyBlock>
  );
};

export default MRegisterBody;
