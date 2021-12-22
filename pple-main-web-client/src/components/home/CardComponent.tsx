import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import BloodMark from '../common/BloodMark';
import Button from '@mui/material/Button'
import Divider from '../common/Divider';

const CardComponentBlock = styled.div`
  width: 25.75rem;
  height: 17.188rem;
  background-color: white;
  box-shadow: 3px 3px 20px rgba(73, 0, 0, 0.05);
  border-radius: 20px;
`;

const RegistrationDate = styled.div`
  font-size: x-small;
  opacity: 0.3;
  font-weight: bolder;
  text-align: right;
  padding: 15px 20px 0px 0px;
`;

const CardHeaderBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px 20px 20px;
  height: max-content;
  background: ${palette.gray[0]};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const CardHeaderContentBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const CardHeaderImageBox = styled.div`
  width: fit-content;
  margin-right: 15px;
`;

const CardHeaderTextBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const CardHeaderText = styled.div`
  & > h3 {
    font-size: small;
    font-weight: bolder;
    margin-bottom: 2px;
  }

  & > p {
    font-size: x-small;
    font-weight: bold;
    opacity: 0.5;
  }
`;

const CardContentBox = styled.div`
    padding:20px 30px;
    & > h2 {
        font-weight:bolder;
        font-size:large;
        margin-bottom: 3px;
    }
    & > span{
        font-size:x-small;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;
`;

const CardComponent = () => {

    const messagStyle = { 
        width:"48%", 
        color : palette.red[1], 
        borderColor : palette.red[1],
        borderRadius: "20px"
    }
    const postStyle = {
        width:"48%",
        backgroundColor:palette.red[1],
        borderRadius: "20px"

    }
  return (
    <CardComponentBlock>
      <CardHeaderBox>
        <RegistrationDate>2021년 12월 13일 오전 7:30</RegistrationDate>
        <CardHeaderContentBox>
          <CardHeaderImageBox>
            <BloodMark type="b+" />
          </CardHeaderImageBox>
          <CardHeaderTextBox>
            <CardHeaderText>
              <h3>윤성호</h3>
              <p>520221(생년월일)</p>
            </CardHeaderText>
            <Divider />
            <CardHeaderText>
              <h3>혈소판성분채혈</h3>
              <p>헌혈 종류</p>
            </CardHeaderText>
            <Divider />
            <CardHeaderText>
              <h3>3회</h3>
              <p>남은 횟수</p>
            </CardHeaderText>
          </CardHeaderTextBox>
        </CardHeaderContentBox>
      </CardHeaderBox>

      <CardContentBox>
          <h2>너무 급합니다 ㅠㅠ</h2>
          <span>지난 11월 27일에 저희 아버지께서 급성 골수성 백혈병 (M3)를 판정받아 지난주부터 항암치료에 들어가셨습니다. 이 유형의 백혈병이 치료 과정에 혈소판을  ... </span>
          <span>더보기</span>
          <ButtonGroup>
              <Button sx={messagStyle} variant="outlined" color="error" size="large">메세지 보내기</Button>
              <Button sx={postStyle} variant="contained" color="error" size="large">사연 더보기</Button>
          </ButtonGroup>
      </CardContentBox>
    </CardComponentBlock>
  );
};

export default CardComponent;
