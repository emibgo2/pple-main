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

const GlobalStyles = createGlobalStyle`
  ${reset};
  font-family: "Spoqa Han Sans Neo";
`;

const AppBlock = styled.div`
  width: 28rem;
  height: 100%;
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
            <Route path="/post" element={<RequestPostPage />}/>
            <Route path="/post/:userId" element={<RequestPost/>} />
            <Route path="/post/register" element={<RequestRegisterPage />} />
            <Route path="/page" element={<MyPage/>}/> 
          </Routes>
      </AppBlock>
    </>
  );
};

export default App;
