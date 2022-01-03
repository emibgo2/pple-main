import {styled } from '@mui/system';
import React from 'react';
import getUserId from '../../../lib/hooks/getUserId';
import FeedContent from '../../common/feed/FeedContent';
import FeedFooter from '../../common/feed/FeedFooter';
import FeedHeader from '../../common/feed/FeedHeader';
import FeedPatientInfo from '../../common/feed/FeedPatientInfo';
import MobileToolbar from '../../common/navigation/MobileToolbar';
import palette from '../../../lib/styles/palette';
import FeedUserInfo from './feed/FeedUserInfo';

const RequestPostBlock = styled('div')({
    height: "100%",
});

const FeedContentBox = styled('div')({
  padding: '0px 18px',
  backgroundColor: 'white',
});

const RequestPost2: React.FC = () => {
  // 유저 아이디로 텍스트 설정
  const userId = getUserId();

  return (
    <>
      <MobileToolbar isBack={true} title="요청 피드" isSearch={true} />
      <RequestPostBlock>
        <FeedHeader
          bloodType="AB+"
          sort="혈소판성분채혈"
          noBorderRadius={true}
        />
        <FeedContentBox>
        <FeedUserInfo/>
          <FeedContent />
          <FeedPatientInfo />
          <FeedFooter />
        </FeedContentBox>
      </RequestPostBlock>
    </>
  );
};

export default RequestPost2;
