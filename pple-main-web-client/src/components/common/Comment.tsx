import React from 'react';
import styled from 'styled-components';
import Subract from '../../lib/images/Subtract.png';
import BloodTypeBlock from './BloodTypeBlock';

const OpponentCommentBlock = styled.div`
  width: 100%;
  align-content: flex-start;
`;

const UserCommentBlock = styled.div`
  width: 100%;
  align-content: flex-start;
`;

const CommentBubble = styled.div`
    background-color:whitesmoke;
`;

interface Props {
  isOpponent: boolean;
  name: string;
  bloodType: string;
  comment: string;
  time: string;
}

const Comment: React.FC<Props> = ({
  isOpponent,
  name,
  bloodType,
  comment,
  time,
}) => {
  return (
    <>
      {isOpponent ? (
        <OpponentCommentBlock>
          <div>
            <img src={Subract} alt="임시 프로필" />
          </div>
          <div>
            <CommentBubble>
              <div className="user-info">
                <span>{name}</span>
                <BloodTypeBlock text={bloodType} />
              </div>
              <div className="comment">{comment}</div>
            </CommentBubble>
            <div className="comment-footer">
              <span>{time}</span>
              <button>답글달기</button>
            </div>
          </div>
        </OpponentCommentBlock>
      ) : (
        <UserCommentBlock>       
          <div>
            <CommentBubble>
              <div className="user-info">
                <span>{name}</span>
                <BloodTypeBlock text={bloodType} />
              </div>
              <div className="comment">{comment}</div>
            </CommentBubble>
            <div className="comment-footer">
              <span>{time}</span>
              <button>답글달기</button>
            </div>
          </div>
          <div>
            <img src={Subract} alt="임시 프로필" />
          </div>
        </UserCommentBlock>
      )}
    </>
  );
};

export default Comment;
