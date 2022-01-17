import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import FeedHeader from '../common/feed/FeedHeader';
import FeedContent from '../common/feed/FeedContent';

const CardComponentBlock = styled('div')({
    width:"100%",
    marginTop:"15px",
})

const CardContentBox = styled('div')({
    padding: "8px 27px"
});

const CardComponent: React.FC = () => {
  return (
    <CardComponentBlock>
      <Paper sx={{ borderRadius: '14px', border: 'none' }} elevation={2}>
        <FeedHeader
          bloodType="AB형"
          sort="혈소판성분채혈"
          noBorderRadius={false}
          buttonText='도움주기'
        />
        <CardContentBox>
          <FeedContent
            title="저희 아버지가 재생불량성빈혈을 판정을 받"
            content=" "
          />
        </CardContentBox>
      </Paper>
    </CardComponentBlock>
  );
};

export default CardComponent;