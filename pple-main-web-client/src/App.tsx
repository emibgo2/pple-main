import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import NavigationBar from './components/navigation/NavigationBar';
import GlobalNavigationBar from './components/navigation/GlobalNavigationBar';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';

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
            <GlobalStyles/>
            <AppBlock>
                <NavigationBar/>
                <ContentBlock>
                    <GlobalNavigationBar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>

                </ContentBlock>
            </AppBlock>
        </>
    );
};

export default App;
