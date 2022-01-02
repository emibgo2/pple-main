import React from 'react';
import styled from 'styled-components';
import RadiusButton from './buttons/RadiusButtonWithDownDrop';
import Divider from './Divider';

const RecipientInformationBlock = styled.div`
  background: whitesmoke;
  padding:20px;
  border-radius:25px;
`;

const PersonInformationBlock = styled.div`
  display: flex;

  & span {
    font-size: small;
    color: gray;
  }

  margin-bottom:20px;
`;

const InformationBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .divider {
      padding-left: 5px;
    border-left: 1px solid black;
  }

  & .title {
      font-size:small;
      font-weight:bold;
        opacity:0.6;
  }
  & .content {
      font-weight:bold;
  }
`;

const RecipientInformationBox: React.FC = () => {
  return (
    <RecipientInformationBlock>
      <PersonInformationBlock>
        <div className="recipient-info-button">
        </div>

        <div>
          <h3>윤성호</h3>
          <span>520221(생년월일)</span>
        </div>
      </PersonInformationBlock>

      <InformationBlock>
        <div>
          <div className="title">혈액성분</div>
          <div className="content">혈솦판성분체혈</div>
        </div>
        <div className="divider">
          <div className="title">의료기관명</div>
          <div className="content">울산대학병원</div>
        </div>
        <div className="divider">
          <div className="title">병실호수</div>
          <div className="content">91병동</div>
        </div>
      </InformationBlock>
    </RecipientInformationBlock>
  );
};

export default RecipientInformationBox;
