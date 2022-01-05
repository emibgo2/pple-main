import React, { useState } from 'react';
import {
  styled,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Label from '../../../common/Label';

const BirthSelectBox = styled('div')({
  width: '100%',
  display: 'flex',
  textAlign:'center',
});

interface IBirth {
  year: string;
  month: string;
  day: string;
}

const Year: Array<number> = [...Array(100).keys()];
const Month: Array<number> = [...Array(12).keys()];
const Day: Array<number> = [...Array(31).keys()];

const BirthForm = () => {
  const [birth, setBirth] = useState<IBirth>({
    year: '',
    month: '',
    day: '',
  });

  const handleBirth = (event: SelectChangeEvent) => {
    setBirth({
      ...birth,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Label>생년월일</Label>
      <BirthSelectBox className='form'>
        <FormControl variant="standard" className="form-birth" fullWidth>
          <Select value={birth.year} name="year" onChange={handleBirth}>
            {Year.map((year, idx) => (
              <MenuItem key={1922 + year} value={1922 + year}>
                {1922 + year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" className="form-birth" fullWidth>
          <Select value={birth.month} name="month" onChange={handleBirth}>
            {Month.map((month, idx) => (
              <MenuItem key={month + 1} value={month + 1}>
                {month + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" className="form-birth" fullWidth>
          <Select value={birth.day} name="day" onChange={handleBirth}>
            {Day.map((day, idx) => (
              <MenuItem key={day + 1} value={day + 1}>
                {day + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </BirthSelectBox>
    </>
  );
};

export default BirthForm;
