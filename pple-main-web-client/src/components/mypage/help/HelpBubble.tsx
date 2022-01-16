import React from 'react';
import { Avatar, styled } from '@mui/material'; 

const HelpBubbleBlock = styled('div')({
  display: 'flex',
  width: '100%',
  padding: '19px 15px',
  background: '#EEEEEE',
  borderRadius:'15px',
  boxSizing:"border-box",
  marginBottom:"15px",
});
const AvatarBox = styled('div')({
    marginRight:"12px",
});
const TextBox = styled('div')({
    width:"100%",
    boxSizing:"border-box",
}); 
const TextHeadBox = styled('div')({
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  marginBottom:"6px",
  '& .name': {
    display: 'flex',
    alignContent: 'center',
  },
  '& .name b': {
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: '19px',
    letterSpacing: '-0.03em',
  },
  '& .time': {
    color: '#B7B7B7',
    fontSize:"10px",
  },
});
const TextBodyBox = styled('div')({}); 
const BloodBubble = styled('div')({
    width:"16px",
    height:"14px",
  fontStyle: 'normal',  
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '14px',
  letterSpacing: '-0.03em',
  color: '#B7B7B7',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  margin: ' 0px 10px',
  borderRadius: '10px',
  padding: '1.5px 7px',
  border:"1px solid #B7B7B7",
});
const HelpBubble: React.FC = () => {
    return (
      <HelpBubbleBlock>
        <AvatarBox>
          <Avatar
            alt="프로필 이미지"
            sx={{ width: '52.39px', height: '52.39px' }}
          />
        </AvatarBox>
        <TextBox>
          <TextHeadBox>
            <div className="name">
              <b>지니지니</b>
              <BloodBubble>B+</BloodBubble>
            </div>
            <div className='time'>2021년 12월 13일</div>
          </TextHeadBox>
          <TextBodyBox>
            지니지니님께서 <span style={{color:"red"}}>농축적혈구 헌혈</span>을 <br/>해주셨습니다.
          </TextBodyBox>
        </TextBox>
      </HelpBubbleBlock>
    );
};

export default HelpBubble;