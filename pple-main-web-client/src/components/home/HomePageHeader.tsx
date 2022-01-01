import { Button, IconButton } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import styles from 'styled-components';
import { styled } from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { useNavigate } from 'react-router-dom';
const HomePageHeaderBlock = styles.div`
  background: linear-gradient(109.4deg, #ff6969 -3.19%, #ff3333 109.95%);
  border-radius: 0px 0px 30px 30px;
`;
const Title = styles.div``;
const ButtonGroup = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ButtonContent = styles.div``;
const StyledButton = styled(Button)({
  color: 'white',
  backgroundColor: `linear-gradient(
    104.83deg,
    rgba(255, 255, 255, 0.3) -5.98%,
    rgba(255, 255, 255, 0.1) 107.85%
  )`,
  boxShadow:
    'inset 3px 3px 2px rgba(255, 255, 255, 0.1) inset -2px -2px 2px rgba(167, 0, 0, 0.1)',
  backdropFilter: 'blur(4px)',
  borderRadius:'30px',
  textAlign:'center',
});
const ButtonBox = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 20px',
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
        <div>안녕하세요,{name}님!</div>
        <div>오늘도 건강하고 행복하세요!</div>
      </Title>
      <ButtonGroup>
        <StyledButton variant="contained" onClick={goRequestRegister}>
            <PostAddOutlinedIcon />
            <ButtonContent>
              <div className="button-text-top">지정헌혈</div>
              <div className="button-text-bottom">요청하기</div>
            </ButtonContent>
        </StyledButton>
        <StyledButton>
            <DateRangeOutlinedIcon />
            <ButtonContent>
              <div className="button-text-top">헌혈</div>
              <div className="button-text-bottom">예약하기</div>
            </ButtonContent>
        </StyledButton>
      </ButtonGroup>
    </HomePageHeaderBlock>
  );
};

export default HomePageHeader;
