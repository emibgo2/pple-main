import React from 'react';
import styled from 'styled-components';
import { Button, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import RadiusButton from '../common/RadiusButtonWithDownDrop';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const CardContainerBlock = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
    justify-content: center;
    align-items: center;
& .pagination{
    margin-top:20px;
}
`;

const ButtonGroup = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  & div{
    display:flex;
    align-items: center;
}
`;

const CardTemplate = () => {
  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div>
          <RadiusButton text="혈액형"></RadiusButton>
          <RadiusButton text="헌헐 종류"></RadiusButton>
          <RadiusButton text="필요 횟수"></RadiusButton>
        </div>
        <div>
          <Button>
            <span>전체보기</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </ButtonGroup>
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
    </CardContainerBlock>
  );
};

export default CardTemplate;
