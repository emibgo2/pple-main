import React from 'react';
import styled from 'styled-components';
import heartImg from '../../lib/images/heart.png';
import bar from '../../lib/images/bar.png';
import RadiusButton from '../common/buttons/RadiusButton';

const CardComponentBlock = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px solid black;
  & .header {
    background-color: whitesmoke;
  }
`;

const TimeBox = styled.div`
padding:4px;
  font-size: x-small;
  width: 100%;
  text-align: right;
`;

const CardComponentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & .middle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .middle .header-text .header-text-title {
    color: gray;
    font-size: smaller;
  }
`;

const CardComponentHeaderColumn = styled.div`
  & .blood-icon {
    position: relative;
  }
  & .blood-icon .card-text {
    position: absolute;
    left: 25%;
    bottom: 35%;
    color: white;
    font-weight: bold;
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
      <div className="header">
        <TimeBox>
          <div>2021년 12월 13일 등록</div>
        </TimeBox>
        <CardComponentHeader>
          <CardComponentHeaderColumn>
            <div className="blood-icon">
              <div className="card-img">
                <img src={heartImg} alt="하트이미지" />
              </div>
              <div className="card-text">{bloodType}</div>
            </div>
          </CardComponentHeaderColumn>

          <CardComponentHeaderColumn className="middle">
            <div>
              <img src={bar} alt="체온계이미지"></img>
            </div>
            <div className="header-text">
              <div className="header-text-title">헌혈 종류</div>
              <div>{sort}</div>
            </div>
          </CardComponentHeaderColumn>
          <CardComponentHeaderColumn>
            <RadiusButton text="채팅하기" />
          </CardComponentHeaderColumn>
        </CardComponentHeader>
      </div>
      <CardComponentContent>{story}</CardComponentContent>
    </CardComponentBlock>
  );
};

export default CardComponent;
