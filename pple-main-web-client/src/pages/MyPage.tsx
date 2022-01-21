import React, { useState } from 'react';
import LoginRequestModal from '../components/common/modal/LoginRequestModal';
import MyPageHeader from '../components/mypage/MyPageHeader';
import MyPageList from '../components/mypage/MyPageList';
import MyPageTemplate from '../components/mypage/MyPageTemplate';
import Profile from '../components/mypage/Profile';
const MyPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(!open);
  };

  return (
    <MyPageTemplate>
      <MyPageHeader />
      <Profile />
      <MyPageList />
    </MyPageTemplate>
  );
};

export default MyPage;
