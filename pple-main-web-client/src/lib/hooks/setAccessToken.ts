import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../models';
import { setToken } from '../../models/auth/account';
import { customAxios } from '../customAxios';

const setAccessToken = (userToken: any) => {
  const token = useSelector((state: RootState) => state.account.token);
  const dispatch = useDispatch();

  dispatch(setToken(userToken));
  customAxios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
  console.log(token);
};

export default setAccessToken;
