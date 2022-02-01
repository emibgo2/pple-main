import React from 'react';
import { styled } from '@mui/material';
import ChannelTalk from '../common/buttons/ChannelTalk';
const MyPageTemplateBlock = styled('div')({
  '& .channel-talk': {
    width: '28rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
    textAlign: 'end',
  },
});

const MyPageTemplate: React.FC = ({ children }) => {
  return (
    <MyPageTemplateBlock>
      {children}
      {/* <div className="channel-talk">
        <ChannelTalk />
      </div> */}
    </MyPageTemplateBlock>
  );
};

export default MyPageTemplate;
