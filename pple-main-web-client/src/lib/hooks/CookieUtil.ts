import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setUuid } from '../../models/auth/account';
import { customAxios } from '../customAxios';

const CookieUtil = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  useEffect(() => {
    console.log(cookies.jwt);
    if (cookies.jwt == undefined) {
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
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = searchParams.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠기 없으면 설정
    if (cookies.jwt == undefined && userToken != null) {
      setCookie('jwt', userToken);
      // 토큰 날리기
      navigate('/');
    }
    // 쿠기 만료 시 처리
  }, [cookies]);
};

export const checkUser = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cookies.jwt !== undefined) {
    customAxios
      .get('/api/v1/account/profile', {
        headers: { Authorization: `Bearer ${cookies.jwt}` },
      })
      .then(res => {
        console.log(res);
        dispatch(setUuid(res.data.uuid));
        if (res.data.status == 'TEMP') {
          navigate('/register');
        }
      });
  }
};

export default CookieUtil;
