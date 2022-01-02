import React from 'react';
import { styled } from '@mui/material';

const FeedContentBlock = styled('div')({
  '& .title': {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.03em',
    color: '#222222',
    margin: '15px 0px',
  },
  '& .content': {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '-0.03em',
    color: '#222222',
    marginBottom: '15px',
  },
});

interface Props{
    title?:string,
    content?: string,
}

const FeedContent: React.FC = () => {
  return (
    <FeedContentBlock>
      <div className="title">아버지가 재생불량성빈혈을 판정을 받았습니다</div>
      <div className="content">
        아빠가 11월 2일 급성백혈병 재발로 인해 이식을 받으시고 회복중에 장출혈이
        생기면서 매일 혈소판 수혈을 받으시고 계신 상황입니다. <br/>병원에서
        지정헌혈을 요청하셔서 백방으로 알아보는데 힘든상황입니다.
      </div>
    </FeedContentBlock>
  );
};

export default FeedContent;
