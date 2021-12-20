import React from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import SearchComponent from '../components/home/SearchComponent';
import CardContainer from '../components/home/CardContainer';

const HomepageBlock = styled.div`
    padding:30px;
    box-sizing:border-box;

`;

const HomePage = () => {
    return (
        <HomepageBlock>
            <HomePageHeader/>
            <SearchComponent/>
            <CardContainer/>
        </HomepageBlock>
    );
};

export default HomePage;