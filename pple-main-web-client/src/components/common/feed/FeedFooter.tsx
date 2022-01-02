import React from 'react';
import { styled } from '@mui/material';
import chat from '../../../lib/images/feed/Chat.png';
import show from '../../../lib/images/feed/Show.png';
import upload from '../../../lib/images/feed/Upload.png';

const FeedFooterBlock = styled('div')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  marginTop: '16.25px',
});

const ColumBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& .start': {
    marginRight: '15px',
  },
});

const StyledSpan = styled('span')({
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12px',
  lineHeight: '14px',
  letterSpacing: '-0.03em',
  marginLeft: '6.25px',
  color: '#B7B7B7',
});

interface Props {
  chatCount?: number;
  uploadCount?: number;
  showCount?: number;
}

const FeedFooter: React.FC = () => {
  return (
    <FeedFooterBlock>
      <ColumBox>
        <div className="start">
          <img src={chat} alt="chat" height={13} />
          <StyledSpan>12</StyledSpan>
        </div>
        <div>
          <img src={upload} alt="upload" height={13} />
          <StyledSpan>4</StyledSpan>
        </div>
      </ColumBox>
      <div>
        <img src={show} alt="show" />
        <StyledSpan>24</StyledSpan>
      </div>
    </FeedFooterBlock>
  );
};

export default FeedFooter;
