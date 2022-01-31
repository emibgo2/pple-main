import React, { useState } from 'react';
import {
  styled,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputBase,
} from '@mui/material';
import palette from '../../../lib/styles/palette';

const TempBLock = styled('div')({
  '& #custom-select': {
    border: 'none',
  },
});

const StyledInputBase = styled(InputBase)({
  '& .MuiInputBase-input': {
    position: 'relative',
    border: `0.577148px solid ${palette.gray[1]}`,
    borderRadius: '18px',
    backgroundColor: 'white',
    color: `${palette.gray[1]}`,
    fontSize: 'small',
    padding: '5px 10px',
    marginRight: '0.5rem',
  },
  '& .MuiInputBase-input:focus': {
    borderRadius: '18px',
    backgroundColor: `${palette.red[2]}`,
    color: 'white',
    borderColor: '#FF6980',
  },
  '&:hover': {
    color: `${palette.red[2]}`,
    borderColor: '#FF6980',
  },
});

interface Props {
  title: string;
  list: Array<string>;
  name: string;
  handleSelect: any;
  value: string;
}
const RadiusButtonWithDownDrop: React.FC<Props> = ({
  title,
  list,
  name,
  handleSelect,
  value,
}) => {
  return (
    <FormControl>
      <TempBLock>
        <Select
          name={name}
          value={value ? value : title}
          onChange={handleSelect}
          input={<StyledInputBase></StyledInputBase>}
        >
          <MenuItem disabled value={title}>
            {title}
          </MenuItem>
          {list.map((item, idx) => (
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </TempBLock>
    </FormControl>
  );
};

export default RadiusButtonWithDownDrop;
