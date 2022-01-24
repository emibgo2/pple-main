import React from 'react';
import { IconButton, styled } from '@mui/material';
import ChannelTalkImg from '../../../lib/images/Talk.svg';

const ChannelTalkBlock = styled('div')({});

const ChannelTalk = () => {
  return (
    <ChannelTalkBlock>
      <IconButton>
        <img src={ChannelTalkImg} alt="채널톡" />
      </IconButton>
    </ChannelTalkBlock>
  );
};

export default ChannelTalk;
