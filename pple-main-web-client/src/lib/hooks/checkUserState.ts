import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUuid } from '../../models/auth/account';
import { customAxios } from '../customAxios';

// TEMP 면 회원가입화면으로 이동
const checkUserState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    customAxios
      .get('/api/v1/account/profile')
      .then(res => {
        const status = res.data.status;
        const uuid = res.data.uuid;
        dispatch(setUuid(uuid));
        if (status == 'TEMP') {
          navigate('/register');
          return;
        }
        console.log('hello!');
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
};

export default checkUserState;
