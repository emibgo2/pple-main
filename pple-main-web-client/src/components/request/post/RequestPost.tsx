import { styled } from '@mui/system';
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
  height: '100%',
});

const FeedContentBox = styled('div')({
  padding: '0px 18px',
  backgroundColor: 'white',
});

const RequestPost: React.FC = () => {
  return (
    <>
      <MobileToolbar isBack={true} title="요청 피드" isSearch={true} />
      <RequestPostBlock>
        <FeedHeader
          buttonText="도움주기"
          bloodType="AB+"
          sort="혈소판성분채혈"
        />
        <FeedContentBox>
          {/* <FeedUserInfo /> */}
          <FeedContent />
        </FeedContentBox>
      </RequestPostBlock>
    </>
  );
};

export default RequestPost;
