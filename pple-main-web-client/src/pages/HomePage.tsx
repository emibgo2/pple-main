import React from 'react';
import styled from 'styled-components';
import HomePageHeader from '../components/home/HomePageHeader';
import CardTemplate from '../components/home/CardTemplate';

const HomepageBlock = styled.div`
`;

const HomePage: React.FC = () => {
    return (
        <HomepageBlock>
            <HomePageHeader name="지니"/>
            <CardTemplate/>
        </HomepageBlock>
    );
};

export default HomePage;