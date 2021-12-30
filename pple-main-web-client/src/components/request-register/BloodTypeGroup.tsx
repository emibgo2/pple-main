import React, { useState } from 'react';
import cstyled from 'styled-components';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import palette from '../../lib/styles/palette';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '50%',
  '& .MuiButtonBase-root': {
    border: 'none',
  },
  '& #circle-toggle': {
    borderRadius: '100%',
    border: `1px solid ${palette.gray[1]}`,
    backgroundColor: 'white',
    minWidth: '64px',
    color: `${palette.gray[1]}`,
    padding: '1rem',
    transition: "all ease 0.5s 0s",
    '&:focus': {
      backgroundColor: `${palette.red[1]}`,
      color:"white",
    },
  },
});

const StyledCheckButton = styled(ToggleButton)({
  border: 'none',
  '& .sm': {
    fontSize: 'x-small',
  },
  '& #toggle-button-check': {
    background: 'white',
  },
  '& #check-icon': {
    fontSize: 'xx-small',
    innerWidth: '10px',
    border: `1px solid ${palette.gray[1]}`,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    padding:"1px"
  },
});

const BloodTypeGroup = () => {
  const [bloodType, setBloodType] = useState('A');
  const [select, setSelect] = useState(false);

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
    <>
      <div>헌혈 종류*</div>
      <StyledToggleButtonGroup
        exclusive
        onChange={handleBloodType}
        value={bloodType}
        aria-label="select type"
        size="large"
      >
        {children}
      </StyledToggleButtonGroup>
      <StyledCheckButton
        sx={{ padding: '0px' }}
        value="check"
        selected={select}
        onChange={() => {
          setSelect(!select);
        }}
        id="toggle-button-check"
      >
        <div className="sm" id="check-icon">
          <CheckIcon />
        </div>
        <div className="sm">Rh- 혈액형인 경우는 체크를 해주세요</div>
      </StyledCheckButton>
    </>
  );
};

export default BloodTypeGroup;
