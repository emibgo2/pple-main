import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../common/feed/FeedHeader';

const CardComponentBlock = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px solid black;
  & .header {
    background-color: whitesmoke;
  }
`;

const CardComponentContent = styled.div``;

interface CardProps {
  bloodType: string;
  sort: string;
  story: string;
}

const CardComponent: React.FC<CardProps> = ({ bloodType, sort, story }) => {
  return (
    <CardComponentBlock>
      <FeedHeader bloodType={bloodType} sort={sort}/>
      <CardComponentContent>{story}</CardComponentContent>
    </CardComponentBlock>
  );
};

export default CardComponent;
