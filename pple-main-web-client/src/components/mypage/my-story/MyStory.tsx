import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import MyPageElementHeader from '../MyPageElementHeader';
import StoryBubble from './StoryBubble';

const MyStoryBlock = styled('div')({
  width: '100%',
  '& .content': {
    padding: '0px 17px',
    marginTop: '25px',
  },
});

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});

const MyStory: React.FC = ({ children }) => {
  return (
    <MyStoryBlock>
      <MyPageElementHeader title="나의 사연" />
      <Divider />
      <div className="content">{children}</div>
    </MyStoryBlock>
  );
};

export default MyStory;
