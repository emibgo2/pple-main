import { IconButton } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RadiusButton from '../../common/buttons/RadiusButton';
import { TextField,styled } from '@mui/material';
import RegisterInput from './input/RegisterInput';
import BloodTypeGroup from './input/BloodTypeGroup';
import BloodDonationType from './input/BloodDonationType';
import SquareButton from '../../common/buttons/SquareButton';
import palette from '../../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';
import PhoneInput from './input/PhoneInput';

const Divider = styled('div')({
  width:"100%",
  height:"9px",
  backgroundColor:"#F4F4F4",
})

const RequestRegisterBlock = styled('div')({
  width: "100%",
  height: '100%',
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  padding: '14px 17px 14px 10px',
  "& .button":{
    display:"flex",
    alignItems:'center',
    fontWeight:"bold",
  },
  "& .button span":{
    display:'block',
    marginTop:"3px",
    marginRight:"77px",
    fontSize:"larger"
  }
});

const Body = styled('div')({
  width: "100%",
}); 

const BodyTextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  marginTop: '1rem',
  padding: '10px',
  '& #title': {
    fontSize: 'large',
    color: '#222222',
    fontWeight: 'bold',
  },
});

const BodyPatientInfoBox = styled("div")({
    display: "flex",
  flexDirection: 'column',
  backgroundColor: 'white',
  marginTop: "1rem",
  padding:"0px 17px",
});

const Footer = styled('div')({
  backgroundColor:"white",
  boxSizing: "border-box",
  width: '100%',
  display: 'flex',
  justifyContent: "space-between",
  alignContent: 'center',
  padding: '0px 2rem',
  marginTop:"48.35px",
  "& .MuiButton-root" : {
    padding: '10px 0px',
    width:"45%",
  }

});

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

        <div className='button'>
          <span>요청하기</span>
          <RadiusButton text="내정보 불러오기" />
        </div>
      </Header>
      <Divider/>
      <Body>
        <BodyTextBox>
          <TextField
            id="title"
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
          <BloodTypeGroup />
          <BloodDonationType />
          <PhoneInput/>
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
