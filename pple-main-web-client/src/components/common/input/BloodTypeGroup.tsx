import React, { useState } from 'react';
import {
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import palette from '../../../lib/styles/palette';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Label from '../Label';
const BloodTypeInputBlock = styled('div')({
  marginTop: '25px',
  '& .rh-text': {
    display: 'inline-block',
    marginTop: '0.5rem',
    fontSize: 'small',
    color: `${palette.gray[1]}`,
    border: 'none',
  },
  '& #custom-toggle': {
    padding: '0px',
    background: 'none',
    marginRight: '0.5rem',
  },
  '& .title': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marginBottom: '25px',
});

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
    transition: 'all ease 0.5s 0s',
    '&:focus': {
      backgroundColor: `${palette.red[1]}`,
      color: 'white',
    },
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
    <BloodTypeInputBlock>
      <div className="title">
        <Label>혈액형*</Label>
        <div>
          <ToggleButton
            sx={{
              color: select ? 'black' : 'white',
              background: 'none',
            }}
            value="check"
            selected={select}
            onChange={() => {
              setSelect(!select);
            }}
            className="rh-text"
            id="custom-toggle"
          >
            <CheckCircleOutlineIcon fontSize="small" />
          </ToggleButton>
          <span className="rh-text">Rh- 혈액형인 경우는 체크를 해주세요</span>
        </div>
      </div>
      <StyledToggleButtonGroup
        exclusive
        onChange={handleBloodType}
        value={bloodType}
        aria-label="select type"
        size="large"
      >
        {children}
      </StyledToggleButtonGroup>
    </BloodTypeInputBlock>
  );
};

export default BloodTypeGroup;
