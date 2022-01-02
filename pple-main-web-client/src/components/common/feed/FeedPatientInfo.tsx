import React from 'react';
import { styled } from '@mui/material';

const FeedPatientInfoBlock = styled('div')({
    boxSizing:"border-box",
    padding:"0px 33px",
  width: '100%',
  background: '#F1F1F1',
  borderRadius: '14px',
  display: 'flex',
  flexDirection: 'column',
  opacity: '0.7',
});

const ContentBox = styled('div')({
  marginTop: '15px',
  marginBottom: '15px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  '& div': {
    minWidth: '96px',
  },
  '& .left-border': {
    paddingLeft: '10px',
    borderLeft: '1px solid #E6E6E6',
    borderRadius: '2px',
  },
});

const Label = styled('div')({
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '12px',
  lineHeight: '14px',
  letterSpacing: '-0.03em',
  color: '#AEAEAE',
});

const Content = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '14px',
  letterSpacing: '-0.03em',
  color: '#222222',
});

interface Patient {
  name: string;
  birth: string;
  bloodComponent: string;
  institution: string;
  hospitalRoom: string;
  needCount: string;
}

const FeedPatientInfo: React.FC = () => {
  return (
    <FeedPatientInfoBlock>
      <ContentBox>
        <div>
          <Label>성명</Label>
          <Content>윤성호</Content>
        </div>
        <div className="left-border">
          <Label>생년월일</Label>
          <Content>520101</Content>
        </div>
        <div className="left-border">
          <Label>혈액성분</Label>
          <Content>혈소판성분채혈</Content>
        </div>
      </ContentBox>

      <ContentBox>
        <div>
          <Label>의료기관명</Label>
          <Content>울산대학교병원</Content>
        </div>
        <div className="left-border">
          <Label>병실호수</Label>
          <Content>91동</Content>
        </div>
        <div className="left-border">
          <Label>필요수량</Label>
          <Content>6회</Content>
        </div>
      </ContentBox>
    </FeedPatientInfoBlock>
  );
};

export default FeedPatientInfo;
