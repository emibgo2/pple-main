import { useNavigate } from 'react-router-dom';
import { customAxios } from '../customAxios';

// TEMP 면 회원가입화면으로 이동
const checkUserState = () => {
  const navigate = useNavigate();
  customAxios
    .get('/api/v1/account/profile')
    .then(res => {
      const status = res.data.status;
      if (status == 'TEMP') {
        navigate('/register');
      }
    })
    .catch(e => {
      console.log(e);
    });
};

export default checkUserState;
