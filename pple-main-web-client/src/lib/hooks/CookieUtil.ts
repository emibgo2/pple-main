import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setToken, setUuid } from '../../models/auth/account';
import { customAxios } from '../customAxios';

const CookieUtil = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  useEffect(() => {
    console.log(cookies.jwt);
    if (cookies.jwt == undefined || cookies.jwt == null) {
      const userToken = searchParams.get('token');
      console.log(userToken);
      if (userToken == null) {
        navigator;
      }
    }
    if (cookies.jwt !== undefined) {
      console.log('hi cookie');
    }
  }, []);
};

// 쿠기 설정
export const setCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = searchParams.get('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // 쿠기 없으면 설정
    if (cookies.jwt === undefined || cookies.jwt == null) {
      setCookie('jwt', userToken);
      dispatch(setToken(userToken));
      customAxios.defaults.headers['Authorization'] = userToken;
      // 토큰 날리기
      navigate('/');
    }
    // 쿠기 만료 시 처리
  }, []);
};

export const checkUser = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cookies.jwt !== undefined || cookies.jwt !== null) {
    customAxios
      .get('/api/v1/account/profile', {
        headers: { Authorization: `Bearer ${cookies.jwt}` },
      })
      .then(res => {
        dispatch(setUuid(res.data.uuid));
        if (res.data.status == 'TEMP') {
          navigate('/register');
        }
      });
  }
};

export const getCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  if (cookies.jwt === undefined) {
    return undefined;
  }
  return cookies.jwt;
};

export const getUuid = (): string => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [uuid, setUuid] = useState<string>('');
  customAxios
    .get('/api/v1/account/profile', {
      headers: { Authorization: `Bearer ${cookies.jwt}` },
    })
    .then(res => {
      setUuid(res.data.uuid);
    });
  return uuid;
};

export default CookieUtil;
