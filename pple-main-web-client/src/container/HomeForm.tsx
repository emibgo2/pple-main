import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import HomePageHeader from '../components/home/HomePageHeader';
import { getCookie, setCookie } from '../lib/hooks/CookieUtil';
import { checkUser } from '../lib/hooks/CookieUtil';
import ChannelTalk from '../components/common/buttons/ChannelTalk';
import { customAxios } from '../lib/customAxios';
import HomeCardTemplateForm from './feed/HomeCardTemplateForm';

const HomeForm = () => {
  setCookie();
  checkUser();
  const [displayName, setDisplayName] = useState<string>('피플');
  const jwt = getCookie();
  useEffect(() => {
    if (jwt != undefined && jwt != null) {
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
  }, [jwt]);
  return (
    <>
      <HomePageHeader name={displayName} />
      <HomeCardTemplateForm />
    </>
  );
};

export default HomeForm;
