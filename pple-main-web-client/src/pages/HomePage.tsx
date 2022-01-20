import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import { setCookie } from '../lib/hooks/CookieUtil';
import { checkUser } from '../lib/hooks/CookieUtil';
const HomepageBlock = styled.div``;

const HomePage: React.FC = () => {
  setCookie();
  checkUser();
  return (
    <HomepageBlock>
      <HomePageHeader name="지니" />
      <CardTemplate />
    </HomepageBlock>
  );
};

export default HomePage;
