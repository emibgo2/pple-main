import React, { useState } from 'react';
import { styled, Paper, IconButton } from '@mui/material';
import FeedHeader from '../../common/feed/FeedHeader';
import FeedContent from '../../common/feed/FeedContent';
import FeedUserInfo from '../../request/post/feed/FeedUserInfo';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import { ContentType } from '../../../container/my-page/MyStoryForm';

const StoryBubbleBlock = styled('div')({
  marginBottom: '20px',
});
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

type StoryBubbleType = {
  content: ContentType;
  index: number;
};

const StoryBubble: React.FC<StoryBubbleType> = ({ content, index }) => {
  const navigate = useNavigate();
  const title = content.title;
  const [detail, setDetail] = useState(false);
  const handleDetail = () => {
    setDetail(!detail);
  };
  const handleModifyButton = () => {
    navigate(`/page/story/modify/${content.uuid}`);
  };
  return (
    <StoryBubbleBlock>
      <Paper elevation={2} sx={{ borderRadius: '15px' }}>
        <FeedHeader
          bloodType={
            content.patient.blood.rh == 'POSITIVE'
              ? `${content.patient.blood.abo}+`
              : `${content.patient.blood.abo}-`
          }
          sort={content.bloodProduct[0]}
          buttonText="정보수정"
          onClick={handleModifyButton}
          time={content.createdAt}
        />
        {detail ? (
          <ContentDetail>
            <FeedUserInfo
              time={content.createdAt}
              nickname="에이호프"
              imgUrl={content.createdAccount.profileImageUrl}
            />
            <Title>{title}</Title>
            <Content>{content.content}</Content>
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
            {title.slice(0, 22)}
            <button onClick={handleDetail}>...더보기</button>
          </ContentWithMore>
        )}
      </Paper>
    </StoryBubbleBlock>
  );
};

export default StoryBubble;
