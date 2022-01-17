import React from 'react';
import styled from 'styled-components';
import { FilledInput, Grid, Input, InputBase, TextField } from '@mui/material';

const RegisterInputBlock = styled.div``;
const TitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
// onChange, value 추가
interface Props {
  title: string;
  name: string;
}

// 환자 정보 입력 시 입력 컴포넌트
// value 값을 여기서 설정해야 하나..?
const RegisterInput: React.FC<Props> = ({ title, name }) => {
  return (
    <RegisterInputBlock>
      <Grid container>
        <Grid item xs={4} sm={4}>
          <TitleBox>{title}*</TitleBox>
        </Grid>
        <Grid item xs={8} sm={8}>
          <TextField
            sx={{ width: '100%' }}
            variant="outlined"
            required
            name={name}
          />
        </Grid>
      </Grid>
    </RegisterInputBlock>
  );
};

export default RegisterInput;
