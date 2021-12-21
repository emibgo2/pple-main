import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';
import NavigationBar from './components/navigation/NavigationBar';
import GlobalNavigationBar from './components/navigation/GlobalNavigationBar';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const GlobalStyles = createGlobalStyle`
  ${reset};
  font-family: "Spoqa Han Sans Neo";
`;

const AppBlock = styled.div`
  width: 100%;
  display: flex;
`;

const ContentBlock = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppBlock>
        <NavigationBar />
        <ContentBlock>
          <GlobalNavigationBar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Routes>

        </ContentBlock>
      </AppBlock>
    </>
  );
};

export default App;
