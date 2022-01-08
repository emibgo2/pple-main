import React from 'react';
import MyPageHeader from '../components/mypage/MyPageHeader';
import MyPageList from '../components/mypage/MyPageList';
import MyPageTemplate from '../components/mypage/MyPageTemplate';
import Profile from '../components/mypage/Profile';
const MyPage: React.FC = () => {
    return (
      <MyPageTemplate>
        <MyPageHeader title="마이페이지" isBack={true}/>
        <Profile />
        <MyPageList />
      </MyPageTemplate>
    );
};

export default MyPage;