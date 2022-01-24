import React, { useEffect, useState } from 'react';
import Profile from '../../components/mypage/Profile';
import { customAxios } from '../../lib/customAxios';
import { getCookie } from '../../lib/hooks/CookieUtil';

const ProfileForm = () => {
  const jwt = getCookie();
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bloodType, setBloodType] = useState('');
  useEffect(() => {
    customAxios
      .get('/api/v1/account/profile', {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(res => {
        console.log(res);
        setProfileImageUrl(res.data.profileImageUrl);
        setDisplayName(res.data.displayName);
        if (res.data.blood.rh == 'POSITIVE') {
          setBloodType(`${res.data.blood.abo}+`);
        } else if (res.data.blood.rh == 'NEGATIVE') {
          setBloodType(`${res.data.blood.abo}-`);
        }
      });
  }, []);
  return (
    <Profile
      profileImageUrl={profileImageUrl}
      displayName={displayName}
      bloodType={bloodType}
    />
  );
};

export default ProfileForm;
