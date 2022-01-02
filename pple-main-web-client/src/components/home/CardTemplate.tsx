import React, { MouseEventHandler } from 'react';
import styles from 'styled-components';
import { Button, styled} from '@mui/material';
import CardComponent from './CardComponent';
import RadiusButtonWithDownDrop from '../common/buttons/RadiusButtonWithDownDrop1';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import SortingButtonGroup from '../common/buttons/SortingButtonGroup';

const CardContainerBlock = styles.div`
  width: 100%;
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .pagination {
    margin-top: 20px;
  }
  box-sizing:border-box;
`;

const ButtonGroup = styles.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled(Button)({
  fontSize:'small',
  color:`${palette.gray[1]}`,
  display:'flex',
  justifyContent:'flex-end',
  alignItems:'center',
  '&:hover':{
    color:`${palette.gray[2]}`,
  }
});

const CardTemplate = () => {
  const navigate = useNavigate();
  const goPostList: MouseEventHandler = () => {
    navigate('/post');
  };
  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div>
          <SortingButtonGroup />
        </div>
        <div>
          <StyledButton sx={{padding:'0px'}} onClick={goPostList}>
            <span>전체보기</span>
            <ChevronRightIcon />
          </StyledButton>
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
