import React, { useState } from 'react';
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

const PhoneInput = () => {
  const [number, setNumber] = useState({
    first: '',
    second: '',
    third: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.name == 'second' || e.target.name == 'third') {
      if (onlyNumber.length <= 4) {
        setNumber({
          ...number,
          [e.target.name]: onlyNumber,
        });
      }
      return;
    }
    if (onlyNumber.length <= 3) {
      setNumber({
        ...number,
        [e.target.name]: onlyNumber,
      });
    }
  };
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
            name="second"
            id="second"
            value={number.second}
            onChange={onChange}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
        <div className="divider"></div>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <StyleInput
            name="second"
            id="second"
            value={number.second}
            onChange={onChange}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
        <div className="divider"></div>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <StyleInput
            name="third"
            id="third"
            value={number.third}
            onChange={onChange}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
      </InputBlock>
    </div>
  );
};

export default PhoneInput;
