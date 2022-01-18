import React from 'react';
import { styled, TextField } from '@mui/material';

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
  marginBottom: '25px',
}));

interface InputProps {
  name?: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  inputProps?: any;
}

const StyleInput: React.FC<InputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  inputProps,
  name,
}) => {
  return (
    <>
      <StyledInput
        required
        name={name}
        text={value}
        value={value}
        fullWidth
        id={id}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        inputProps={inputProps}
      />
    </>
  );
};

export default StyleInput;
