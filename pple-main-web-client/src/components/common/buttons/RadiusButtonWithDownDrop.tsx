import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {styled} from '@mui/material';
import { Button } from '@mui/material';
const StyledButton = styled(Button)({
  padding: '7px 16px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  borderColor: 'red',
  color: 'gray',
  '&:hover': {
    backgroundColor: 'red',
    borderColor: 'red',
    boxShadow: 'none',
    color:'white',
  },
  '& div': {
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

type Props = {
    text: string;
    isDisabled?: boolean;
}

const RadiusButton: React.FC<Props> = ({text,isDisabled}) => {
  return (
    <StyledButton color='error' variant='outlined' disabled={isDisabled}>
      <div>
      {text}
      <ArrowDropDownIcon />
      </div>
    </StyledButton>
  );
};

export default RadiusButton;
