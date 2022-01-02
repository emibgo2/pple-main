import React from 'react';
import { styled } from '@mui/material';
import MobileToolbar from '../../common/navigation/MobileToolbar';
import SearchInput from '../../common/SearchInput';
import SortingButtonGroup from '../../common/buttons/SortingButtonGroup';
import FeedTemplate from './feed/FeedTemplate';
const RequestPostListBlock = styled('div')({
  padding:"0px 1rem",
})

const RequestPostList: React.FC = () => {
    return (
      <>
        <MobileToolbar title="요청 피드" isBack={true} isWrite={true} />
        <RequestPostListBlock>
          <SearchInput />
          <SortingButtonGroup/>
          <FeedTemplate bloodType='A형' sort='혈소판 성분채혈'/>
        </RequestPostListBlock>
      </>
    );
};

export default RequestPostList;