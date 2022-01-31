import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RequestPostPage from './pages/RequestPostPage';
import RequestRegisterPage from './pages/RequestRegisterPage';
import RequestPost from './components/request/post/RequestPost';
import MyPage from './pages/MyPage';
import FAQ from './components/mypage/faq/FAQ';
import Helped from './components/mypage/help/Helped';
import ModifyProfileForm from './container/my-page/ModifyProfileForm';
import MyStoryForm from './container/my-page/MyStoryForm';
import DesignatedBloodDonation from './components/mypage/etc/DesignatedBloodDonation';
import PrivacyPolicy from './components/mypage/etc/PrivacyPolicy';
import TermsOfService from './components/mypage/etc/TermsOfService';
import ModifyStoryForm from './container/my-page/ModifyStoryForm';
import './static/fonts/fonts.css';

const GlobalStyles = createGlobalStyle`
  ${reset};
  font-family: "Spoqa Han Sans Neo";
`;

const AppBlock = styled.div`
  width: 28rem;
  height: 100%;
  font-family: 'Pretendard';
`;

const ContentBlock = styled.div`
  width: 28rem;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppBlock>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post" element={<RequestPostPage />} />
          <Route path="/post/register" element={<RequestRegisterPage />} />
          <Route path="/page" element={<MyPage />} />
          <Route path="/page/modify" element={<ModifyProfileForm />} />
          <Route path="/page/faq" element={<FAQ />} />
          <Route path="/page/helper" element={<Helped />} />
          <Route path="/page/story" element={<MyStoryForm />} />
          <Route path="/etc/1" element={<DesignatedBloodDonation />} />
          <Route path="/etc/2" element={<PrivacyPolicy />} />
          <Route path="/etc/3" element={<TermsOfService />} />
          <Route
            path="/page/story/modify/:donationUuid"
            element={<ModifyStoryForm />}
          />
        </Routes>
      </AppBlock>
    </>
  );
};

export default App;
