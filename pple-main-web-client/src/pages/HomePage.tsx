import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../models';
import { setToken } from '../models/auth/account';

const HomepageBlock = styled.div``;

const HomePage: React.FC = () => {  
  const uuid = useSelector((state: RootState) => state.account?.uuid);
  const token = useSelector((state: RootState) => state.account?.token);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = searchParams.get('token'); 
  useEffect(()=>{
      console.log(userToken);
  });

  return (
    <HomepageBlock>
      <HomePageHeader name="지니" />
      <CardTemplate />
    </HomepageBlock>
  );
};

export default HomePage;
