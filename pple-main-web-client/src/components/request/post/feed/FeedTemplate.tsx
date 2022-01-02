import React from 'react';
import { styled,Paper } from '@mui/material';
import FeedHeader from '../../../common/feed/FeedHeader';
import FeedPatientInfo from '../../../common/feed/FeedPatientInfo';
import FeedContent from '../../../common/feed/FeedContent';
import FeedFooter from '../../../common/feed/FeedFooter';

const FeedTemplateBlock = styled('div')({});

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
  return (
    <FeedTemplateBlock>
        <Paper sx={{borderRadius:"14px",border:"none"}} elevation={2}>
      <FeedHeader bloodType={bloodType} sort={sort} />
      <FeedContentBox>
        <FeedContent />
        <FeedPatientInfo />
        <FeedFooter />
      </FeedContentBox>
      </Paper>
    </FeedTemplateBlock>
  );
};

export default FeedTemplate;
