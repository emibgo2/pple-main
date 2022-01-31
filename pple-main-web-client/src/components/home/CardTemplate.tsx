import React, { useState } from 'react';
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

const RenderPost = (contentArray: any) => {
  return contentArray.map((content, idx) => (
    <CardComponent
      key={content.uuid}
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
  ));
};

const FilterBloodType = (bloodType: string, contentArray: any) => {
  return contentArray.map((content, idx) =>
    content.patient.blood.abo == bloodType.replace('형', '') ? (
      <CardComponent
        key={content.uuid}
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
    ) : (
      <div key={idx}></div>
    ),
  );
};

const ChangeBloodProductValue = (bloodProduct: string) => {
  switch (bloodProduct) {
    case '전혈':
      return 'WHOLE';
    case '성분채혈 혈소판':
      return 'PLATELET';
    case '성분채혈 백혈구':
      return 'LEUKOCYTE';
    case '농축적혈구':
      return 'PACKED_RED_BLOOD_CELL';
    case '백혈구여과제거적혈구':
      return 'LEUKOCYTE_REDUCED_RED_BLOOD_CELL';
    default:
      break;
  }
};

const FilterBloodProduct = (bloodProduct: string, contentArray: any) => {
  return contentArray.map((content, idx) =>
    content.bloodProduct[0] == ChangeBloodProductValue(bloodProduct) ? (
      <CardComponent
        key={content.uuid}
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
    ) : (
      <div key={idx}></div>
    ),
  );
};

const FilterBloodTypeAndBloodProduct = (
  bloodType: string,
  bloodProduct: string,
  contentArray,
) => {
  return contentArray.map((content, idx) =>
    content.patient.blood.abo == bloodType.replace('형', '') &&
    content.bloodProduct[0] == ChangeBloodProductValue(bloodProduct) ? (
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
    ) : (
      <div key={idx}></div>
    ),
  );
};

type CardTemplateType = {
  handleAuth: any;
  contentArray: any;
};

export type FilterType = {
  bloodType: string;
  bloodProduct: string;
};

const CardTemplate: React.FC<CardTemplateType> = ({
  handleAuth,
  contentArray,
}) => {
  const [filter, setFilter] = useState<FilterType>({
    bloodType: null,
    bloodProduct: null,
  });

  return (
    <CardContainerBlock>
      <ButtonGroup>
        <div className="sort">
          <SortingButtonGroup filter={filter} setFilter={setFilter} />
        </div>
        <div>
          <StyledButton sx={{ padding: '0px' }} onClick={handleAuth}>
            <span>전체보기</span>
            <ChevronRightIcon />
          </StyledButton>
        </div>
      </ButtonGroup>
      {filter.bloodProduct && filter.bloodType
        ? FilterBloodTypeAndBloodProduct(
            filter.bloodType,
            filter.bloodProduct,
            contentArray,
          )
        : filter.bloodProduct
        ? FilterBloodProduct(filter.bloodProduct, contentArray)
        : filter.bloodType
        ? FilterBloodType(filter.bloodType, contentArray)
        : RenderPost(contentArray)}
    </CardContainerBlock>
  );
};

export default CardTemplate;
