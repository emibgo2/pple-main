import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import FeedHeader from '../common/feed/FeedHeader';
import FeedContent from '../common/feed/FeedContent';
import { StringifyOptions } from 'querystring';
import ConnectionModal from '../common/modal/ConnectionModal';

const CardComponentBlock = styled('div')({
  width: '100%',
  marginTop: '15px',
});

const CardContentBox = styled('div')({
  padding: '8px 27px',
});

interface Props {
  title: string;
  content: string;
  sort: string;
  bloodType: string;
  time: string;
  phoneNumber: string;
}

const CardComponent: React.FC<Props> = ({
  title,
  content,
  sort,
  bloodType,
  time,
  phoneNumber,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (open: boolean) => {
    setOpen(!open);
  };

  const onClick = () => {
    console.log(phoneNumber);
    setOpen(!open);
  };

  return (
    <CardComponentBlock>
      <Paper sx={{ borderRadius: '14px', border: 'none' }} elevation={2}>
        <FeedHeader
          bloodType={bloodType}
          sort={sort}
          buttonText="도움주기"
          time={time}
          onClick={onClick}
        />
        <CardContentBox>
          <FeedContent title={title} content={content} />
        </CardContentBox>
      </Paper>
      <ConnectionModal
        handleOpen={handleOpen}
        open={open}
        phoneNumber={phoneNumber}
      />
    </CardComponentBlock>
  );
};

export default CardComponent;
