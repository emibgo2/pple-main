import React, { MouseEventHandler } from 'react';
import { styled, Paper } from '@mui/material';
import FeedHeader from '../../../common/feed/FeedHeader';
import FeedPatientInfo from '../../../common/feed/FeedPatientInfo';
import FeedContent from '../../../common/feed/FeedContent';
import FeedFooter from '../../../common/feed/FeedFooter';
import { useNavigate } from 'react-router-dom';
import FeedUserInfo from './FeedUserInfo';

const FeedTemplateBlock = styled('div')({
  '& .feed': {
    cursor: 'pointer',
  },
});
const FeedBox = styled('div')({
  marginBottom: '15px',
});
const FeedContentBox = styled('div')({
  padding: '0px 15px 18px 15px',
  background: '#FFFFFF',
  opacity: '0.7',
  borderRadius: '0px 0px 14px 14px',
});

// 피드 정보 배열로 받기
interface Props {
  bloodType: string;
  sort: string;

  title?: string;
  content?: string;

  name?: string;
  birth?: string;
  bloodComponent?: string;
  institution?: string;
  hospitalRoom?: string;
  needCount?: string;
}

const FeedTemplate: React.FC<Props> = ({ bloodType, sort }) => {
  const navigate = useNavigate();
  return (
    <FeedTemplateBlock>
      <Paper
        className="feed"
        sx={{ borderRadius: '14px', border: 'none' }}
        elevation={1}
      >
        <FeedBox>
          <FeedHeader bloodType={bloodType} sort={sort} buttonText="도움주기" />
          <FeedContentBox>
            <FeedUserInfo />
            <FeedContent />
          </FeedContentBox>
        </FeedBox>
      </Paper>
      <Paper
        className="feed"
        sx={{ borderRadius: '14px', border: 'none' }}
        elevation={1}
      >
        <FeedBox>
          <FeedHeader bloodType={bloodType} sort={sort} buttonText="도움주기" />
          <FeedContentBox>
            <FeedUserInfo />
            <FeedContent />
          </FeedContentBox>
        </FeedBox>
      </Paper>
      <Paper
        className="feed"
        sx={{ borderRadius: '14px', border: 'none' }}
        elevation={1}
      >
        <FeedBox>
          <FeedHeader bloodType={bloodType} sort={sort} buttonText="도움주기" />
          <FeedContentBox>
            <FeedUserInfo />
            <FeedContent />
          </FeedContentBox>
        </FeedBox>
      </Paper>
    </FeedTemplateBlock>
  );
};

export default FeedTemplate;
