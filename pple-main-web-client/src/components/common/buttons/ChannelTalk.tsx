import React from 'react';
import { IconButton, styled } from '@mui/material';
import ChannelTalkImg from '../../../lib/images/Talk.svg';

const ChannelTalkBlock = styled('div')({});

const ChannelTalk = () => {
  const onClick = () => {
    window.location.href = 'https://0ej6q.channel.io/lounge';
  };

  return (
    <ChannelTalkBlock>
      <IconButton onClick={onClick}>
        <img src={ChannelTalkImg} alt="채널톡" />
      </IconButton>
    </ChannelTalkBlock>
  );
};

export default ChannelTalk;
