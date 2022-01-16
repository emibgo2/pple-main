import React, { useState } from 'react';
import { styled, Grid, FormControl, Input } from '@mui/material';
import palette from '../../../lib/styles/palette';
import Label from '../Label';
import StyleInput from './StyleInput';
const PhoneInputBlock = styled('div')({
  marginTop: '25px',
  display: 'flex',
  alignItems: 'center',
  '& .title': {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'smaller',
    minWidth: '50px',
    display: 'flex',
  },
});
const InputBlock = styled('div')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  '& .divider': {
    borderBottom: '1px solid #EDEDED',
    height: '28px',
    width: '50px',
    margin: '15px 10px',
  },
  '& .input-form':{
    marginTop:"16px",
  }
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
    <PhoneInputBlock>
      <div className="title">연락처 *</div>
      <InputBlock>
        <FormControl
          sx={{ width: '100%' }}
          variant="standard"
          className="input-form"
        >
          <StyleInput
            name="first"
            id="first"
            value={number.first}
            onChange={onChange}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g3' }}
          ></StyleInput>
        </FormControl>
        <div className="divider"></div>
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
        <FormControl
          sx={{ width: '100%' }}
          variant="standard"
          className="input-form"
        >
          <StyleInput
            name="third"
            id="third"
            value={number.third}
            onChange={onChange}
            inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
          ></StyleInput>
        </FormControl>
      </InputBlock>
    </PhoneInputBlock>
  );
};

export default PhoneInput;
