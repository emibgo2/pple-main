import React from 'react';
import styled from 'styled-components';
import writeImg from '../../lib/images/writepost.svg';

const HomePageHeaderBlock = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-weight:bolder; 
    font-size:x-large;
    margin-bottom: 30px;
`;

const RightColumBox = styled.div`
    display:flex;
    align-content:center;
    & > div { 
        margin-left: 10px;
        font-size: small;
        padding-top:8px;
    }
`;

const HomePageHeader = () => {
    return (
        <HomePageHeaderBlock>
            <div>열정 뿜뿜 헌혈자, 에이호프님</div>
            <RightColumBox>
                <img src={writeImg} alt="게시글 쓰기"/>
                <div>게시글 쓰기</div>
            </RightColumBox>
        </HomePageHeaderBlock>
    );
};


export default HomePageHeader;