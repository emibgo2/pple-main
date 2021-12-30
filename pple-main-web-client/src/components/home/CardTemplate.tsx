import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Button, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import RadiusButtonWithDownDrop from '../common/buttons/RadiusButtonWithDownDrop';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const goPostList: MouseEventHandler = () =>{
    navigate('/post');
  }
  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div>
          <RadiusButtonWithDownDrop text="혈액형"></RadiusButtonWithDownDrop>
          <RadiusButtonWithDownDrop text="헌헐 종류"></RadiusButtonWithDownDrop>
          <RadiusButtonWithDownDrop text="필요 횟수"></RadiusButtonWithDownDrop>
        </div>
        <div>
          <Button onClick={goPostList}>
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
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
      <CardComponent bloodType="AB+" sort="혈소판성분체혈" story="aaaaaaaaa" />
    </CardContainerBlock>
  );
};

export default CardTemplate;
