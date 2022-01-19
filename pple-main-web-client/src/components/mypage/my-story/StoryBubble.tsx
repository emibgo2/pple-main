import React, { useState } from 'react';
import { styled, Paper, IconButton } from '@mui/material';
import FeedHeader from '../../common/feed/FeedHeader';
import FeedContent from '../../common/feed/FeedContent';
import FeedUserInfo from '../../request/post/feed/FeedUserInfo';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

const StoryBubbleBlock = styled('div')({});
const ContentWithMore = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '22px',
  letterSpacing: '-0.03em',
  color: '#222222',
  margin: '17px 0px',
  padding: '0px 27px 17px 27px',
  '& button': {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
});
const ContentDetail = styled('div')({
  padding: '0px 17px 0px 17px',
});

const Title = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '22px',
  letterSpacing: '-0.03em',
  color: '#222222',
  margin: '15px 0px',
});
const Content = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.03em',
  color: '#222222',
});
const ReduceButton = styled('div')({
  width: '100%',
  textAlign: 'center',
  marginTop: '10px',
});

const StoryBubble: React.FC = () => {
  const navigate = useNavigate();
  const str = '저희 아버지가 재생불량성빈혈을 판정을 받았습니다';
  const [detail, setDetail] = useState(false);
  const handleDetail = () => {
    setDetail(!detail);
  };
  const handleModifyButton = () => {
    navigate('/page/story/modify');
  };
  return (
    <StoryBubbleBlock>
      <Paper elevation={2} sx={{ borderRadius: '15px' }}>
        <FeedHeader
          bloodType="AB+"
          sort="혈소판성분채혈"
          buttonText="정보수정"
          onClick={handleModifyButton}
        />
        {detail ? (
          <ContentDetail>
            <FeedUserInfo />
            <Title>{str}</Title>
            <Content>
              아빠가 11월 2일 급성백혈병 재발로 인해 이식을 받으시고 회복중에
              장출혈이 생기면서 매일 혈소판 수혈을 받으시고 계신 상황입니다.
              병원에서 지정헌혈을 요청하셔서 백방으로 알아보는데 힘든상황입니다.
            </Content>
            <ReduceButton>
              <IconButton
                sx={{ color: '#B7B7B7', textAlign: 'center' }}
                onClick={handleDetail}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </ReduceButton>
          </ContentDetail>
        ) : (
          <ContentWithMore>
            {str.slice(0, 22)}
            <button onClick={handleDetail}>...더보기</button>
          </ContentWithMore>
        )}
      </Paper>
    </StoryBubbleBlock>
  );
};

export default StoryBubble;
