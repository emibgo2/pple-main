import React, { useState } from 'react';
import MRegisterBody from '../../components/auth/register/MRegisterBody';
import produce from 'immer';

// 회원 정보 관련 인터페이스
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
const RegisterForm = () => {
  const [user, setUser] = useState<IUser>({
    name: '',
    nickname: '',
    year: '',
    month: '',
    day: '',
    gender: '',
    blood: {
      rh: 'POSITIVE',
      abo: '',
    },
    phone: {
      first: '',
      second: '',
      third: '',
    },
  });

  const onChange = (e: { target: HTMLInputElement | HTMLButtonElement }) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // 핸드폰 정보
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 숫자만 입력 받기
    const onlyNumber = value.replace(/[^0-9]/g, '');
    const nextState = produce(user, draftState => {
      // 첫 번째 자리
      if (name === 'first') {
        if (onlyNumber.length <= 3) {
          draftState.phone.first = onlyNumber;
        }
        console.log('hello first');
        return;
      }
      // 두 번째 자리
      else if (name === 'second') {
        if (onlyNumber.length <= 4) {
          draftState.phone.second = onlyNumber;
        }
      }
      // 세 번쨰 자리
      else {
        if (onlyNumber.length <= 4) {
          draftState.phone.third = onlyNumber;
        }
      }
    });
    setUser(nextState);
  };

  const handleBloodType = (e: { target: HTMLButtonElement }) => {
    const { value } = e.target;
    setUser({
      ...user,
      blood:{
        abo: value, 
        rh: user.blood.rh,
      }
    });
  };

  const handleRh = (e: { target: HTMLButtonElement }) => {
    const nextState = produce(user, draftState => {
      if (user.blood.rh == 'POSITIVE') {
        draftState.blood.rh = 'NEGATIVE';
        return;
      } 
      draftState.blood.rh = 'POSITIVE';
    });
    setUser(nextState);
  };

  return (
    <MRegisterBody
      user={user}
      onChange={onChange}
      handlePhoneNumber={handlePhoneNumber}
      handleBloodType={handleBloodType}
      handleRh={handleRh}
    />
  );
};

export default RegisterForm;
