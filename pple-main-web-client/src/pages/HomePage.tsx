import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';
import ConnectionModal from '../components/common/modal/ConnectionModal';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { customAxios } from '../lib/customAxios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../models';
import { setToken } from '../models/auth/account';

const HomepageBlock = styled.div``;

const HomePage: React.FC = () => {
  // const navigate = useNavigate();
  // const token = useSelector((state: RootState) => state.setToken.token);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const userToken = searchParams.get('token');
  //   dispatch(setToken(userToken));
  //   console.log('userToken', userToken);

  //   if (userToken !== null) {
  //     customAxios.defaults.headers.common[
  //       'Authorization'
  //     ] = `Bearer ${userToken}`;
  //   }
  //   customAxios.get('/api/v1/account/profile').then(res => {
  //     console.log(res.data.status);
  //     dispatch(setUuid(res.data.uuid));
  //     if (res.data.status == 'TEMP') {
  //       navigate('/register');
  //     }
  //   });

  //   axios.get('http://ppledev.link/api/v1/account/profile').then(res => {
  //     console.log(res.data);
  //     // 전역으로 현재 로그인된 계정 상태 관리
  //     if (res.data.status == 'TEMP') {
  //       navigate('/register');
  //     }
  //   });
  // });

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
