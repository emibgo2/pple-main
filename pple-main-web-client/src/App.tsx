import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';
import NavigationBar from './components/navigation/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RequestPostPage from './pages/RequestPostPage';
import RequestRegisterPage from './pages/RequestRegisterPage';

const GlobalStyles = createGlobalStyle`
  ${reset};
  font-family: "Spoqa Han Sans Neo";
`;

const AppBlock = styled.div`
`;

const ContentBlock = styled.div`
  width: 28rem;
  box-sizing:border-box;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppBlock>
        <ContentBlock>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/post" element={<RequestPostPage />} />
            <Route path="/post/register" element={<RequestRegisterPage />} />
          </Routes>
        </ContentBlock>
      </AppBlock>
    </>
  );
};

export default App;
