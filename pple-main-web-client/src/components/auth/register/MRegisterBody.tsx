import React, { useEffect, useState } from 'react';
import palette from '../../../lib/styles/palette';
import {
  styled,
  FormControl,
  Input,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import BirthForm from './BirthForm';

const MRegisterBodyBlock = styled('div')({
  padding: '0px 1rem',

  width: '100%',
});

const InputNickname = styled(Input)({
  '& .help-text': {
    fontSize: 'small',
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    borderBottom: `1px solid ${palette.gray[1]}`,
    width: 'auto',
  },
  '& .MuiInputBase-input placeholder': {
    color: `${palette.gray[1]}`,
  },
});

const Label = styled('div')({
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  fontSize: 'smaller',
});

const MRegisterBody = () => {
  return (
    <MRegisterBodyBlock>
      <FormControl variant="standard" fullWidth id="form-nickname">
        <Label>닉네임</Label>
        <InputNickname
          placeholder="10자 이내로 입력해주세요"
          id="input-nickname"
          fullWidth
        />
        <FormHelperText className="help-text">
          닉네임은 10자이내 한글, 영문, 숫자만 입력 가능합니다.
        </FormHelperText>
      </FormControl>

        <BirthForm/>
    </MRegisterBodyBlock>
  );
};

export default MRegisterBody;
