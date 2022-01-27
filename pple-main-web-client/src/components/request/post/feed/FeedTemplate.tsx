import React, { useState } from 'react';
import { styled, Paper } from '@mui/material';
import FeedHeader from '../../../common/feed/FeedHeader';
import FeedPatientInfo from '../../../common/feed/FeedPatientInfo';
import FeedContent from '../../../common/feed/FeedContent';
import FeedFooter from '../../../common/feed/FeedFooter';
import { useNavigate } from 'react-router-dom';
import FeedUserInfo from './FeedUserInfo';
import ConnectionModal from '../../../common/modal/ConnectionModal';

const FeedTemplateBlock = styled('div')({
  '& .feed': {
    cursor: 'pointer',
  },
});
const FeedBox = styled('div')({
  marginTop: '15px',
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
  time: string;
  displayName: string;
  phoneNumber: string;

  title: string;
  content: string;
}

const FeedTemplate: React.FC<Props> = ({
  bloodType,
  sort,
  time,
  displayName,
  title,
  content,
  phoneNumber,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <FeedTemplateBlock>
      <Paper
        className="feed"
        sx={{ borderRadius: '14px', border: 'none' }}
        elevation={1}
      >
        <FeedBox>
          <FeedHeader
            onClick={handleOpen}
            bloodType={bloodType}
            sort={sort}
            buttonText="도움주기"
          />
          <FeedContentBox>
            <FeedUserInfo time={time} nickname={displayName} />
            <FeedContent title={title} content={content} />
          </FeedContentBox>
        </FeedBox>
      </Paper>
      <ConnectionModal
        phoneNumber={phoneNumber}
        open={open}
        handleOpen={handleOpen}
      />
    </FeedTemplateBlock>
  );
};

export default FeedTemplate;
