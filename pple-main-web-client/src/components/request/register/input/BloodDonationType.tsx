import React, { useState } from 'react';
import Label from '../../../common/Label';
import { ToggleButton, styled } from '@mui/material';

const BloodDonationTypeBlock = styled('div')({
  '& .MuiButtonBase-root': {
    background: '#f9f9f9',
    border: '1px solid #EDEDED',
    borderRadius: '10px',
    color: '#B7B7B7',
    marginTop:"8px",
  },
  
});
const StyleToggleButton = styled(ToggleButton)({
});

const BloodDonationType = () => {
  const [selected1,setSelected1] = useState(false);
  const [selected2,setSelected2] = useState(false);
  const [selected3,setSelected3] = useState(false);
  const [selected4,setSelected4] = useState(false);
  const [selected5,setSelected5] = useState(false);
  return (
    <BloodDonationTypeBlock>
      <Label>헌혈 종류*</Label>
      <StyleToggleButton
        sx={{background : selected1 ? "#FF6969" :"gray" }}
        fullWidth
        value="whole-blood"
        selected={selected1}
        onChange={() => {
          setSelected1(!selected1);
        }}
      >
        전혈
      </StyleToggleButton>
      <StyleToggleButton
        sx={{ width: '48%',marginRight:"16px" }}
        value="whole-blood"
        selected={selected2}
        onChange={() => {
          setSelected2(!selected2);
        }}
      >
        성분채혈 혈소판
      </StyleToggleButton>
      <StyleToggleButton
        sx={{ width: '48%' }}
        value="whole-blood"
        selected={selected3}
        onChange={() => {
          setSelected3(!selected3);
        }}
      >
        성분채혈 백혈구
      </StyleToggleButton>
      <StyleToggleButton
        sx={{ width: '48%' ,marginRight:"16px"}}
        value="whole-blood"
        selected={selected4}
        onChange={() => {
          setSelected4(!selected4);
        }}
      >
        농축적혈구
      </StyleToggleButton>
      <StyleToggleButton
        sx={{ width: '48%' }}
        value="whole-blood"
        selected={selected5}
        onChange={() => {
          setSelected5(!selected5);
        }}
      >
        백혈구여과재거적혈구
      </StyleToggleButton>
    </BloodDonationTypeBlock>
  );
};

export default BloodDonationType;