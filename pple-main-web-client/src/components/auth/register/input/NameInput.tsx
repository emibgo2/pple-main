import React, { useState } from 'react';
import { styled, TextField } from '@mui/material';
import palette from '../../../../lib/styles/palette';
import Label from '../../../common/Label';
import StyleInput from '../../../common/input/StyleInput';

interface StyleInputProps {
  text: string;
}

const StyledInput = styled(TextField)<StyleInputProps>(({ text }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#F9F9F9',
    borderRadius: '10px',
    '& fieldset': {
      borderColor: text ? '#767676' : '#EDEDED',
      color: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#767676',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#767676',
    },
  },
}));

const NameInput: React.FC = () => {
  const [name, setName] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Label>이름</Label>
      <StyleInput
        id="user-name"
        placeholder="실명을 입력해주세요"
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

export default NameInput;