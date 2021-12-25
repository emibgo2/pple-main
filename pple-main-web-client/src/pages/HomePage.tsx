import React from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import SearchComponent from '../components/home/SearchComponent';
import CardTemplate from '../components/home/CardTemplate';

const HomepageBlock = styled.div`
    padding:30px;
    box-sizing:border-box;

`;

const HomePage: React.FC = () => {
    return (
        <HomepageBlock>
            <HomePageHeader/>
            <SearchComponent/>
            <CardTemplate/>
        </HomepageBlock>
    );
};

export default HomePage;