import React from 'react';
import { styled } from '@mui/material';
import BirthForm from './input/BirthForm';
import GenderInput from './input/GenderInput';
import BloodTypeInput from './input/BloodTypeInput';
import TermsInput from './input/TermsInput';
import PhoneInput from './input/PhoneInput';
import NicknameInput from './input/NicknameInput';
import RegisterButton from './input/RegisterButton';

const MRegisterBodyBlock = styled('div')({
  height: '100%',
  padding: '0px 1rem 44px 1rem',
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  marginTop: '2rem',
  flexDirection: 'column',
  alignContent: 'center',
});

interface IUser {
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
  handleRh: any;
  handleBirthDay: any;
}

const MRegisterBody: React.FC<IRegister> = ({
  user,
  onChange,
  handlePhoneNumber,
  handleBloodType,
  handleRh,
  handleBirthDay,
}) => {
  const { nickname, year, month, day, gender, blood, phone } = user;
  return (
    <MRegisterBodyBlock>
      <NicknameInput nickname={nickname} onChange={onChange} />
      <BirthForm
        year={year}
        month={month}
        day={day}
        onChange={handleBirthDay}
      />
      <GenderInput gender={gender} onChange={onChange} />
      <BloodTypeInput
        blood={blood}
        handleBloodType={handleBloodType}
        handleRh={handleRh}
      />
      <PhoneInput phone={phone} handlePhoneNumber={handlePhoneNumber} />
      <TermsInput />
      <RegisterButton user={user} />
    </MRegisterBodyBlock>
  );
};

export default MRegisterBody;
