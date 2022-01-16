import React from 'react';
import { styled } from '@mui/material';
import MyPageElementHeader from '../MyPageElementHeader';
import HelpBubble from './HelpBubble';

const HelpedBlock = styled('div')({
  width:"100%",
  '& .content':{
    padding:"0px 17px",
    marginTop:'25px',
  }
});

const Divider = styled('div')({
  width: '100%',
  height: '9px',
  backgroundColor: '#F4F4F4',
});
const Helped: React.FC = () => {
    return (
      <HelpedBlock>
        <MyPageElementHeader title="도움을 주신 분들" />
        <Divider />
        <div className="content">
          <HelpBubble />
          <HelpBubble />
          <HelpBubble />
        </div>
      </HelpedBlock>
    );
};

export default Helped;