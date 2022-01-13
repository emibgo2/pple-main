import React from 'react';
import {styled,Button, ButtonBase} from '@mui/material';
import palette from '../../../../lib/styles/palette';
const RegisterButtonBlock = styled('div')({
    width:"100%",
    marginTop:"25px",
    paddingBottom:"25px",
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

interface IButton{
  user: any,
}

const RegisterButton: React.FC<IButton> = ({user}) => {
    const onSubmit = ()=>{
      console.log(user);
    }
    return (
      <RegisterButtonBlock>
        <StyledButton onClick={onSubmit}>
          <div>회원 가입</div>
        </StyledButton>
      </RegisterButtonBlock>
    );
};

export default RegisterButton;