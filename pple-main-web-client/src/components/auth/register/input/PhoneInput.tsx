import React, { useEffect, useState } from 'react';
import { styled, Grid, FormControl, Input } from '@mui/material';
import palette from '../../../../lib/styles/palette';
import Label from '../../../common/Label';
import StyleInput from '../../../common/input/StyleInput';
const InputBlock = styled('div')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  '& .divider': {
    borderBottom: '1px solid #EDEDED',
    height: '28px',
    width: '50px',
    margin: '0px 10px',
  },
});

interface IPhone {
  phone: {
    first: string;
    second: string;
    third: string;
  };
  handlePhoneNumber: any;
}

const PhoneInput: React.FC<IPhone> = ({ phone, handlePhoneNumber }) => {
  return (
    <div>
      <Label>휴대폰 번호</Label>
      <InputBlock>
        <StyleInput
          name="first"
          id="first"
          value={phone.first}
          onChange={handlePhoneNumber}
        ></StyleInput>
        <div className="divider"></div>
        <StyleInput
          name="second"
          id="second"
          value={phone.second}
          onChange={handlePhoneNumber}
        ></StyleInput>
        <div className="divider"></div>
        <StyleInput
          name="third"
          id="third"
          value={phone.third}
          onChange={handlePhoneNumber}
        ></StyleInput>
      </InputBlock>
    </div>
  );
};

export default PhoneInput;
