import React from 'react';
import styled from 'styled-components';
import tempImag from '../../lib/images/Ellipse 2.png';

const ChatBubbleBlock = styled.div`
display:flex;
height: max-content;
& .chat-time{
    background-color: aqua;
    vertical-align: bottom; 
}
`;

const ChatBubbleBox = styled.div`
    background:aqua;
    height:fit-content;    
    margin-bottom:5px;
    
`;

interface Props {
  isOpponent: boolean;
  textArray: Array<string>;
  time: string;
}

const ChatBubble: React.FC<Props> = ({ isOpponent, textArray,time }) => {
  return isOpponent ? (
    <ChatBubbleBlock>
      <div className="chat-img">
        <img src={tempImag} alt="프로필 사진" />
      </div>
      <div className="chat-content">
      {textArray.map((text,idx) => <ChatBubbleBox key={idx}>{text}</ChatBubbleBox> )}
      </div>
      <div className="chat-time"><span>{time}</span></div>
    </ChatBubbleBlock>
  ) : (
    <></>
  );
};

export default ChatBubble;
