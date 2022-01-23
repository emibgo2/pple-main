import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import { setCookie } from '../lib/hooks/CookieUtil';
import { checkUser } from '../lib/hooks/CookieUtil';
import ChannelTalk from '../components/common/buttons/ChannelTalk';

const HomepageBlock = styled('div')({
  '& .channel-talk': {
    width: '28rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
    textAlign: 'end',
  },
});

const HomePage: React.FC = () => {
  setCookie();
  checkUser();
  return (
    <HomepageBlock>
      <HomePageHeader name="지니" />
      <CardTemplate />
      <div className="channel-talk">
        <ChannelTalk />
      </div>
    </HomepageBlock>
  );
};

export default HomePage;
