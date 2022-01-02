import React, { useState } from 'react';
import { styled, Grid, FormControl, Input } from '@mui/material';
import palette from '../../../../lib/styles/palette';

const Label = styled('div')({
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  fontSize: 'smaller',
});

const StyledInput = styled(Input)({
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

const StyledGrid = styled(Grid)({
  display: 'flex',
  alignContent: 'center',
  '& .input .input-form': {
    textAlign: 'center',
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
    setNumber({
      ...number,
      [e.target.name]: onlyNumber,
    });
  };
  return (
    <div>
      <Label>휴대폰 번호</Label>
      <StyledGrid container spacing={3}>

        <Grid item sm={2} className="input">
          <FormControl
            sx={{ width: '100%' }}
            variant="standard"
            className="input-form"
          >
            <StyledInput
              name="first"
              value={number.first}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              onChange={onChange}
            ></StyledInput>
          </FormControl>
        </Grid>

        <Grid item sm={1}>
          <span>-</span>
        </Grid>

        <Grid item sm={4} className="input">
          <FormControl sx={{ width: '100%' }} variant="standard">
            <StyledInput
              name="second"
              value={number.second}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              onChange={onChange}
            ></StyledInput>
          </FormControl>
        </Grid>

        <Grid item sm={1}>
          <span>-</span>
        </Grid>

        <Grid item sm={4} className="input">
          <FormControl sx={{ width: '100%' }} variant="standard">
            <StyledInput
              name="third"
              value={number.third}
              inputProps={{ inputMode: 'numeric', pattern: '/[0-9]/g4' }}
              onChange={onChange}
            ></StyledInput>
          </FormControl>

        </Grid>
      </StyledGrid>
    </div>
  );
};

export default PhoneInput;
