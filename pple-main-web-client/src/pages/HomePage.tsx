import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import { getCookie, setCookie } from '../lib/hooks/CookieUtil';
import { checkUser } from '../lib/hooks/CookieUtil';
import ChannelTalk from '../components/common/buttons/ChannelTalk';
import { customAxios } from '../lib/customAxios';

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
  const [displayName, setDisplayName] = useState<string>('피플');
  const jwt = getCookie();
  useEffect(() => {
    if (jwt != undefined && jwt != null) {
      console.log(jwt);
      customAxios
        .get('/api/v1/account/profile', {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then(res => {
          setDisplayName(res.data.displayName);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  return (
    <HomepageBlock>
      <HomePageHeader name={displayName} />
      <CardTemplate />
      <div className="channel-talk">
        <ChannelTalk />
      </div>
    </HomepageBlock>
  );
};

export default HomePage;
