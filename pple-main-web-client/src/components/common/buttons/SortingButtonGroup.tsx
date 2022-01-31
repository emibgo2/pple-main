import React from 'react';
import { styled } from '@mui/material';
import RadiusButtonWithDownDrop from './RadiusButtonWithDownDrop';
import { FilterType } from '../../home/CardTemplate';
const SortingButtonGroupBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '0px',
});

interface Filter {
  filter?: FilterType;
  setFilter?: any;
}

const SortingButtonGroup: React.FC<Filter> = ({ filter, setFilter }) => {
  const bloodTypeList = ['A형', 'B형', 'O형', 'AB형'];
  const bloodDonationList = [
    '전혈',
    '성분채혈 혈소판',
    '성분채혈 백혈구',
    '농축적혈구',
    '백혈구여과제거적혈구',
  ];
  const NeedCountList = ['1회', '2회', '3회', '4회', '5회'];
  const handleSelect = (e: any) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <SortingButtonGroupBlock>
      <RadiusButtonWithDownDrop
        title="혈액형"
        list={bloodTypeList}
        name="bloodType"
        handleSelect={handleSelect}
        value={filter.bloodType}
      />
      <RadiusButtonWithDownDrop
        title="헌혈 종류"
        list={bloodDonationList}
        name="bloodProduct"
        handleSelect={handleSelect}
        value={filter.bloodProduct}
      />
      {/* <RadiusButtonWithDownDrop title="필요 횟수" list={NeedCountList} /> */}
    </SortingButtonGroupBlock>
  );
};

export default SortingButtonGroup;
