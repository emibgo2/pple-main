import React from 'react';
import styled from 'styled-components';
import Subract from '../../lib/images/Subtract.png';
import BloodTypeBlock from '../common/BloodTypeBlock';
import RadiusButton from '../common/RadiusButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecipientInformationBox from '../common/RecipientInformationBox';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Comment from '../common/Comment';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { InputBase } from '@mui/material';
import { IconButton } from '@mui/material';
import { Paper } from '@mui/material';

const RequestPostBlock = styled.div``;

const RequestPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 0px 50px;
`;

const RequestPostHeaderColumn = styled.div`
  display: flex;
  & .request_postheader_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  & .request_postheader_text div {
    display: flex;
  }
  & .request_postheader_text span {
    font-size: small;
  }
`;
const RequestPostContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: large;
    font-weight: bolder;
  }
  margin-top: 15px;
  padding: 0px 50px;
`;

const RequestPostContent = styled.div`
  padding: 0px 50px;
  margin-top: 30px;
  & .post_content_text {
    margin-bottom: 25px;
  }
`;

const RequestPostContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  margin-top: 25px;
  & .post_content_footer_col {
    display: flex;
    align-items: center;
  }
  & .post_content_footer_state {
    display: flex;
    align-items: center;
  }
`;

const CommentBlock = styled.div`
  padding: 0px 50px;
`;

const InputCommentBlock = styled.div`
  padding:0px 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing : border-box;
`;

const RequestPost = () => {
  return (
    <RequestPostBlock>
      <RequestPostHeader>
        <RequestPostHeaderColumn>
          <div>
            <img src={Subract} alt="임시 프로필" />
          </div>
          <div className="request_postheader_text">
            <div>
              <h3>에이호프님</h3>
              <BloodTypeBlock text="AB+" />
            </div>
            <span>2021년 12월 13일 오전 7:30</span>
          </div>
        </RequestPostHeaderColumn>
        <RequestPostHeaderColumn>
          <RadiusButton text="채팅하기" />
        </RequestPostHeaderColumn>
      </RequestPostHeader>

      <RequestPostContentTitle>
        <span>너무 급합니다 ㅠㅠ</span>
        <div className="post_content_title_icon">
          <MoreVertIcon />
        </div>
      </RequestPostContentTitle>

      <RequestPostContent>
        <div className="post_content_text">
          아빠가 11월 2일 급성백혈병 재발로 인해 이식을 받으시고 회복중에
          장출혈이 생기면서 매일 혈소판 수혈을 받으시고 계신 상황입니다.
          병원에서 지정헌혈을 요청하셔서 백방으로 알아보는데 힘든상황입니다.
        </div>

        <RecipientInformationBox />

        <RequestPostContentFooter>
          <div className="post_content_footer_col">
            <div className="post_content_footer_state">
              <SmsOutlinedIcon />
              <div>12</div>
            </div>
            <div className="post_content_footer_state">
              <FileUploadOutlinedIcon />
              <div>4</div>
            </div>
          </div>

          <div className="post_content_footer_col">
            <div className="post_content_footer_state">
              <RemoveRedEyeOutlinedIcon />
              <div>24</div>
            </div>
          </div>
        </RequestPostContentFooter>
      </RequestPostContent>

      <hr />

      <CommentBlock>
        <Comment
          isOpponent={true}
          name="조은경"
          bloodType="B+"
          comment="지인분께 한번 연락드려볼게요 에이호프님"
          time="12분전"
        />
        <Comment
          isOpponent={false}
          name="에이호프"
          bloodType="B+"
          comment="감사합니다"
          time="12분전"
        />
      </CommentBlock>

      <InputCommentBlock>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SentimentSatisfiedOutlinedIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="댓글을 남겨주세요"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SendIcon />
          </IconButton>
        </Paper>
      </InputCommentBlock>
    </RequestPostBlock>
  );
};

export default RequestPost;
