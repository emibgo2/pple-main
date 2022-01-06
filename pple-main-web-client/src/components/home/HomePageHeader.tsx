import { Button, IconButton } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styled-components';
import { styled } from '@mui/material';
import PaperPlus from '../../lib/images/PaperPlus.png';
import Calendar from '../../lib/images/Calendar.png';

const HomePageHeaderBlock = styles.div`
  background: linear-gradient(109.4deg, #ff6969 -3.19%, #ff3333 109.95%);
  border-radius: 0px 0px 30px 30px;
  padding:60px 16px 25px 16px;
`;
const Title = styles('div')({
  color:'white',
  marginBottom:"25px",
  fontSize:'24px',
});

const ButtonGroup = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:100%;

`;
const ButtonContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginLeft: '5px',
  '& .button-text-top': {
    fontSize: 'x-small',
    textAlign: 'start',
    Letter: '-0.24px',
    fontWeight: '500',
    margin: '0px',
    lineHeight: '16px',
  },
  '& .button-text-bottom': {
    fontSize: 'large',
    fontWeight: 'bold',
    margin: '0px',
    lineHeight: '16px',
  },
});

const HomeButton = styled(Button)({
  width:"45%",
  padding: "8px 0px 12px 0px",
  display:"flex",
  alignItems:'center',
  background:
    'linear-gradient(104.83deg, rgba(255, 255, 255, 0.3) -5.98%, rgba(255, 255, 255, 0.1) 107.85%)',
  boxShadow:
    'inset 3px 3px 2px rgba(255, 255, 255, 0.12), inset -2px -2px 2px rgba(167, 0, 0, 0.1)',
  backdropFilter: 'blur(4px)',
  borderRadius: '30px',
  '&:hover': {
    background:
      'linear-gradient(104.83deg, rgba(255, 255, 255, 0.3) -5.98%, rgba(255, 255, 255, 0.1) 107.85%)',
    boxShadow:
      'inset 3px 3px 2px rgba(255, 255, 255, 0.12), inset -2px -2px 2px rgba(255, 0, 0, 0.1)',
    backdropFilter: 'blur(4px)',
  },
});

interface HomeHeaderProps {
  name: string;
}

const HomePageHeader: React.FC<HomeHeaderProps> = ({ name }) => {
  const navigate = useNavigate();
  const goRequestRegister: MouseEventHandler = () => {
    navigate('/post/register');
  };
  return (
    <HomePageHeaderBlock>
      <Title>
        <div>
          안녕하세요,<strong style={{ fontWeight: 'bold' }}>{name}님!</strong>
        </div>
        <div>오늘도 건강하고 행복하세요!</div>
      </Title>
      <ButtonGroup>
        <HomeButton variant="contained" onClick={goRequestRegister}>
          <img src={PaperPlus} alt="A" style={{ marginTop: '9px' }} />
          <ButtonContent>
            <div className="button-text-top">지정헌혈</div>
            <div className="button-text-bottom">요청하기</div>
          </ButtonContent>
        </HomeButton>
        <HomeButton variant="contained" onClick={goRequestRegister}>
          <img src={Calendar} alt="A" style={{ marginTop: '7px' }} />
          <ButtonContent>
            <div className="button-text-top">헌혈</div>
            <div className="button-text-bottom">예약하기</div>
          </ButtonContent>
        </HomeButton>
      </ButtonGroup>
    </HomePageHeaderBlock>
  );
};

export default HomePageHeader;
