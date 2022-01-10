import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MLoginBody from '../components/auth/login/MLoginBody';
import { RootState } from '../models';
import { setToken } from '../models/auth/token';
import { customAxios } from '../lib/customAxios';
import axios from 'axios';
const TokenContainer = () => {
  const token = useSelector((state: RootState) => state.setToken.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKakaoLogin = async () => {
    const userToken = searchParams.get('token');

    customAxios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${userToken}`;

    await customAxios.get('/api/v1/account/profile').then(res => {
      console.log(res.data.status);
      if (res.data.status == 'TEMP') {
        navigate('/register');
      } else {
        navigate('/');
      }
    });
  };

  return <MLoginBody handleKakaoLogin={handleKakaoLogin} />;
};

export default TokenContainer;
