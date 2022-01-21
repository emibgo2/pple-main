import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModifyProfile from '../../components/mypage/ModifyProfile';
import { customAxios } from '../../lib/customAxios';
import { getCookie } from '../../lib/hooks/CookieUtil';
import { RootState } from '../../models';

const ModifyProfileForm = () => {
  const [displayName, setDisplayName] = useState('');
  const uuid = useSelector((state: RootState) => state.account.uuid);
  const jwt = getCookie();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const body = {
      displayName: displayName,
    };
    customAxios
      .patch(`/api/v1/account/${uuid}`, body, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(() => {
        console.log('success');
        navigate('/page');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <ModifyProfile displayName={displayName} onChange={onChange} />
      </form>
    </>
  );
};

export default ModifyProfileForm;
