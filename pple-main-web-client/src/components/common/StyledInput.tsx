import React from 'react';
import { TextField } from '@mui/material';

type StyledInputType = {
  label: string;
  placeholder: string;
  helperText?: string;
};

const StyledInput: React.FC<StyledInputType> = ({
  label,
  placeholder,
  helperText,
}) => {
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        variant="standard"
        helperText={helperText ? helperText : " "}
      />
    </div>
  );
};

export default StyledInput;
