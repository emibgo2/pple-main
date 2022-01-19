import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../models';
import { setToken } from '../models/auth/account';
import { customAxios } from '../lib/customAxios';
import setAccessToken from '../lib/hooks/setAccessToken';
import checkUserState from '../lib/hooks/checkUserState';

const HomepageBlock = styled.div``;

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = searchParams.get('token');
  setAccessToken(userToken);
  checkUserState();

  return (
    <HomepageBlock>
      <HomePageHeader name="지니" />
      <CardTemplate />
    </HomepageBlock>
  );
};

export default HomePage;
