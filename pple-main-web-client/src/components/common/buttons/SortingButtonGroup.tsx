import React from 'react';
import { styled } from '@mui/material';
import RadiusButtonWithDownDrop from './RadiusButtonWithDownDrop';
const SortingButtonGroupBlock = styled('div')({
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'100%',
    padding:'0px',
});


const SortingButtonGroup: React.FC = () => {
    const bloodTypeList = ["A형","B형","O형","AB형"];
    const bloodDonationList = ["전혈","성분채혈 혈소판","성분채혈 백혈구","농축적혈구","백혈구여과제거적혈구"];
    const NeedCountList = ["1회","2회","3회","4회","5회"];
    return (
      <SortingButtonGroupBlock>
        <RadiusButtonWithDownDrop title="혈액형" list={bloodTypeList} />
        <RadiusButtonWithDownDrop title="헌혈 종류" list={bloodDonationList} />
        <RadiusButtonWithDownDrop title="필요 횟수" list={NeedCountList} />
      </SortingButtonGroupBlock>
    );
};

export default SortingButtonGroup;