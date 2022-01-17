import React, { MouseEventHandler, useEffect } from 'react';
import styles from 'styled-components';
import { Button, styled} from '@mui/material';
import RadiusButtonWithDownDrop from '../common/buttons/RadiusButtonWithDownDrop';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import SortingButtonGroup from '../common/buttons/SortingButtonGroup';
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../models';

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
  padding:20px 0px 10px 0px;
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
  const token = useSelector((state: RootState)=>state.account?.token); 
  const navigate = useNavigate();
  const handleCookies =
    (token: string | undefined) =>
    (event: React.MouseEvent | React.KeyboardEvent) => {
      console.log(token);
      if (token == '') {
        navigate('/');
      } else {
        // navigate('/post');
        console.log('hi');
      }
    };
  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div className="sort">
          <SortingButtonGroup />
        </div>
        <div>
          <StyledButton sx={{ padding: '0px' }} onClick={handleCookies(token)}>
            <span>전체보기</span>
            <ChevronRightIcon />
          </StyledButton>
        </div>
      </ButtonGroup>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </CardContainerBlock>
  );
};

export default CardTemplate;
