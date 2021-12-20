import React from 'react';
import { TextField } from '@mui/material';

type StyledInputType = { 
    label : string,
    placeholder : string,
    type? : string, 
}

const StyledInput = ({label,placeholder,type} : StyledInputType) => {
    return (
        <div>
        <TextField
          label={label}
          placeholder={placeholder}
          variant="standard"
          type={type ? type : "text"}
        />
        </div>
    );
};

export default StyledInput;