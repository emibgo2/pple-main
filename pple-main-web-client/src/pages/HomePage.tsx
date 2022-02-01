import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import HomePageHeader from '../components/home/HomePageHeader';
import { getCookie, setCookie } from '../lib/hooks/CookieUtil';
import { checkUser } from '../lib/hooks/CookieUtil';
import ChannelTalk from '../components/common/buttons/ChannelTalk';
import { customAxios } from '../lib/customAxios';
import HomeCardTemplateForm from '../container/feed/HomeCardTemplateForm';
import HomeForm from '../container/HomeForm';
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
  return (
    <HomepageBlock>
      <HomeForm />
      {/* <div className="channel-talk">
        <ChannelTalk />
      </div> */}
    </HomepageBlock>
  );
};

export default HomePage;
