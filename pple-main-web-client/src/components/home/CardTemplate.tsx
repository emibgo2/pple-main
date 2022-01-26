import React from 'react';
import styles from 'styled-components';
import { Button, styled } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import palette from '../../lib/styles/palette';
import SortingButtonGroup from '../common/buttons/SortingButtonGroup';
import CardComponent from './CardComponent';

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
  fontSize: 'small',
  color: `${palette.gray[1]}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '&:hover': {
    color: `${palette.gray[2]}`,
  },
});

type CardTemplateType = {
  handleAuth: any;
  contentArray: any;
};

const CardTemplate: React.FC<CardTemplateType> = ({
  handleAuth,
  contentArray,
}) => {
  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div className="sort">
          <SortingButtonGroup />
        </div>
        <div>
          <StyledButton sx={{ padding: '0px' }} onClick={handleAuth}>
            <span>전체보기</span>
            <ChevronRightIcon />
          </StyledButton>
        </div>
      </ButtonGroup>
      {contentArray.map((content, idx) => (
        <CardComponent
          key={idx}
          title={content.title}
          content={content.content}
          sort={content.bloodProduct[0]}
          bloodType={
            content.patient.blood.rh == 'POSITIVE'
              ? `${content.patient.blood.abo}+`
              : `${content.patient.blood.abo}-`
          }
          time={content.createdAt}
          phoneNumber={content.phoneNumber}
        />
      ))}
    </CardContainerBlock>
  );
};

export default CardTemplate;
