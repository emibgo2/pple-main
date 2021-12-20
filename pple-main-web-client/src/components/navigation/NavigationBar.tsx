import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import homeImg from '../../lib/images/navigation/fluent_home-24-filled.png';
import noticeImg from '../../lib/images/navigation/codicon_bell-dot.png'
import chattingImg from '../../lib/images/navigation/bx_bxs-chat.png'
import mypageImg from '../../lib/images/navigation/bi_person.png'

const NavigationBLOCK = styled.div`
    width:140px;
    height:100vh;
    padding:42px 21px; 
    background-color:${palette.red[1]};
    border-radius: 0px 18px 0px 0px;
`; 

const StyledButton = styled.div`
  width: 100%;
  height:fit-content;
  display:flex;
  align-items:center;
  box-sizing: border-box;
  padding:12px;
  border-radius: 18px;
  margin-bottom: 10px;
  color: white;
  font-weight: bolder;
  font-size: smaller;
  transition: all ease-in-out 0.3s 0s;
  & > img{
      display:inline-block;
      margin-right: 5px;
  }
  
  & span {
      min-width:80px;
  }

  &:hover{
      background-color: ${palette.red[0]};
  }
  &:active{
    background-color: ${palette.red[1]};
  }
`;

const navigationList = [
    {img : homeImg, text : "홈", key : "home" },
    {img : noticeImg, text : "알림", key : "notice" },
    {img : chattingImg, text : "채팅", key : "chat" },
    {img : mypageImg, text : "마이페이지", key : "mypage" },
];

const NavigationBar:React.FC = () => {
    return (
        <NavigationBLOCK>
        {navigationList.map(list=>(
            <StyledButton key={list.key}>
                <img src={list.img} alt={list.text}/>
                <span>{list.text}</span>
            </StyledButton>
        )
        )}
        </NavigationBLOCK>
    );
};

export default NavigationBar;