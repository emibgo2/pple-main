import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StyledInput from '../common/StyledInput';
import registerText from '../../lib/styles/registerText';

const RegisterFormBlock = styled.div`
  width: 100%;
`;

const RegisterHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 200px;
  box-sizing: border-box;
  & .MuiSvgIcon-root {
    font-size: large;
  }

  & h1 {
    min-width: 200px;
    font-size: x-large;
    font-weight: bold;
    text-align: center;
  }
`;

const RegisterContent = styled.div`
  width: 100%;
  box-sizing : border-box;
  display: flex;
  justify-content:space-between;
  padding: 0px 220px;
`;

const RegisterContentColumn = styled.div`
  width:40%;
  min-width: 270px;
  margin-top:80px;
  & .MuiFormHelperText-root {
    font-size: x-small;
  }
  & .MuiInput-input::placeholder{
      font-size: small;
  }
`;

const RegisterFooter = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 80px;
`;

const RegisterForm: React.FC = () => {
  const { nickname, name, birth } = registerText;
  return (
    <RegisterFormBlock>
      <RegisterHeader>
        <Button color="error">
          <ArrowBackIosIcon />
        </Button>
        <h1>회원가입</h1>
        <div></div>
      </RegisterHeader>
      <RegisterContent>
        <RegisterContentColumn>
          <StyledInput
            label={nickname.label}
            placeholder={nickname.placeholder}
            helperText={nickname.helperText}
          ></StyledInput>
          <StyledInput
            label={name.label}
            placeholder={name.placeholder}
          ></StyledInput>
        </RegisterContentColumn>
        <RegisterContentColumn>
          <StyledInput
            label={birth.label}
            placeholder={birth.placeholder}
          ></StyledInput>
          <StyledInput
            label="휴대폰"
            placeholder="휴대폰 번호를 입력해주세요"
          ></StyledInput>
        </RegisterContentColumn>
      </RegisterContent>
      <RegisterFooter>
        <Button variant='contained'>회원가입</Button>
      </RegisterFooter>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
