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
  createPhoneFormat: (phone: any) => void;
}

const PhoneInput: React.FC<IPhone> = ({
  phone,
  handlePhoneNumber,
  createPhoneFormat,
}) => {
  useEffect(() => {
    createPhoneFormat(phone);
  }, [phone]);

  return (
    <div>
      <Label>휴대폰 번호</Label>
      <InputBlock>
        <FormControl
          sx={{ width: '100%' }}
          variant="standard"
          className="input-form"
        >
          <StyleInput
            name="first"
            id="first"
            value={phone.first}
            onChange={handlePhoneNumber}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g3' }}
          ></StyleInput>
        </FormControl>
        <div className="divider"></div>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <StyleInput
            name="second"
            id="second"
            value={phone.second}
            onChange={handlePhoneNumber}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
        <div className="divider"></div>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <StyleInput
            name="third"
            id="third"
            value={phone.third}
            onChange={handlePhoneNumber}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
      </InputBlock>
    </div>
  );
};

export default PhoneInput;
