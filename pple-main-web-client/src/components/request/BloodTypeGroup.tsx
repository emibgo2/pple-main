import React, { useState } from 'react';
import cstyled from 'styled-components';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Avatar } from '@mui/material';
import { Spacing } from '@mui/system';

const BloodTypeGroupBlock = cstyled.div``;
const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '50%',
  '& .MuiButtonBase-root': {
    border: 'none',
  },
  '& #circle-toggle': {
    borderRadius: '100%',
    border: '1px solid #B7B7B7',
    backgroundColor: 'white',
    minWidth: '64px',
    color: '#B7B7B7',
    padding: '1rem',
    transition: "all ease 0.5s 0s",
    '&:focus': {
      backgroundColor: '#FF6969',
      color:"white",
    },
  },
});

const BloodTypeGroup = () => {
  const [bloodType, setBloodType] = useState('A');
  const handleBloodType = (
    event: React.MouseEvent<HTMLElement>,
    newBloodType: string,
  ) => {
    setBloodType(newBloodType);
  };

  const children = [
    <ToggleButton id="circle-toggle" value="A+" key="A+">
      <span>A+ </span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="B+" key="B+">
      <span>B+ </span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="O+" key="O+">
      <span>O+ </span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="AB+" key="AB+">
      <span>AB+</span>
    </ToggleButton>,
  ];
  return (
    <BloodTypeGroupBlock>
      <div>헌혈 종류*</div>
      <StyledToggleButtonGroup
        exclusive
        onChange={handleBloodType}
        value={bloodType}
        aria-label="select type"
        size='large'
      >
        {children}
      </StyledToggleButtonGroup>
    </BloodTypeGroupBlock>
  );
};

export default BloodTypeGroup;
