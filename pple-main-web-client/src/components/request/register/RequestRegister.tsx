import { IconButton } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import RadiusButton from '../../common/buttons/RadiusButton';
import { TextField } from '@mui/material';
import RegisterInput from './input/RegisterInput';
import BloodTypeGroup from './input/BloodTypeGroup';
import BloodDonationType from './input/BloodDonationType';
import SquareButton from '../../common/buttons/SquareButton';
import palette from '../../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';

const RequestRegisterBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${palette.gray[0]};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;
const Body = styled.div`
  width: 100%;
`;
const BodyTextBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 1rem;
`;
const BodyPatientInfoBox = styled.div`
  background-color: white;
  padding: 2rem;
`;

const Footer = styled.div`
background-color:white;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0px 2rem;
  & .MuiButton-root{
    padding: 10px 0px;
    width:45%;
  }
`;

const RequestRegister: React.FC = () => {
  const navigate = useNavigate();
  const onClickExit: MouseEventHandler = () =>{
    navigate(-1);
  }
  return (
    <RequestRegisterBlock>
      <Header>
        <div>
          <IconButton onClick={onClickExit}>
            <CloseIcon />
          </IconButton>
        </div>

        <div>
          <span>요청하기</span>
        </div>

        <div>
          <RadiusButton text="내정보 불러오기" />
        </div>
      </Header>

      <Body>
        <BodyTextBox>
          <TextField
            id="standard-basic"
            variant="standard"
            name="request-title"
            placeholder="제목"
          />
          <TextField
            id="standard-multiline-static"
            multiline
            rows={6}
            placeholder="내용"
            variant="standard"
            name="request-content"
          />
        </BodyTextBox>

        <BodyPatientInfoBox>
          {/* name 값 데베랑 이름 맞추기 */}
          <RegisterInput title="환자명" name="name" />
          <RegisterInput title="생년월일" name="birth" />
          <BloodTypeGroup />
          <BloodDonationType />
          <RegisterInput title="필요 횟수" name="need-count" />
          <RegisterInput title="환자 등록번호" name="patient-number" />
          <RegisterInput title="의료기관명" name="hospital" />
          <RegisterInput title="병실호수" name="room-number" />
        </BodyPatientInfoBox>
      </Body>

      <Footer>
        <SquareButton
          onClick={onClickExit}
          text="취소"
          textColor={palette.gray[1]}
          backgroundColor={palette.gray[0]}
        />
        <SquareButton text="등록" />
      </Footer>
    </RequestRegisterBlock>
  );
};

export default RequestRegister;
