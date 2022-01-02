import React from 'react';
import {styled,Button, ButtonBase} from '@mui/material';
import palette from '../../../../lib/styles/palette';
const RegisterButtonBlock = styled('div')({
    width:"100%",
})

const StyledButton = styled(ButtonBase)({
  width: '100%',
  color: 'white',
  backgroundColor: `${palette.gray[5]}`,
  borderRadius: '15px',
  padding: '17px 0px',
  transition:"0.2s ease-in-out 0.2s",
  '&:active': {
    backgroundColor: `${palette.red[1]}`,
  },
  '&:hover': {
    backgroundColor: `${palette.red[1]}`,
  },
});

const RegisterButton: React.FC = () => {
    return (
        <RegisterButtonBlock>
            <StyledButton>
                <div>회원 가입</div>
            </StyledButton>
        </RegisterButtonBlock>
    );
};

export default RegisterButton;