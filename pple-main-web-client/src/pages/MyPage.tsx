import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoginRequestModal from '../components/common/modal/LoginRequestModal';
import MyPageHeader from '../components/mypage/MyPageHeader';
import MyPageList from '../components/mypage/MyPageList';
import MyPageTemplate from '../components/mypage/MyPageTemplate';
import Profile from '../components/mypage/Profile';
import { RootState } from '../models';
const MyPage: React.FC = () => {
    const token = useSelector((state: RootState) => state.account.token); 
    const [open, setOpen] = useState(false); 
    const handleModalOpen = () =>{
      setOpen(!open); 
    };
    useEffect(()=>{
      if(token == ''){
        setOpen(true);
      }
    })
    return (
      <MyPageTemplate>
        <LoginRequestModal open={open} onClick={handleModalOpen} />
        <MyPageHeader/> 
        <Profile />
        <MyPageList />
      </MyPageTemplate>
    );
};

export default MyPage;