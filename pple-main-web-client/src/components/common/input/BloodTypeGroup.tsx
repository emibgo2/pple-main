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
  '& .MuiButtonBase-root': {
    backgroundColor: 'white',
    minWidth: '64px',
    color: `${palette.gray[1]}`,
    padding: '1rem',
    transition: 'all ease 0.5s 0s',
  },
  '& .MuiToggleButton-root.Mui-selected': {
    background: `${palette.red[1]} !important`,
    color: 'white',
  },
  '& #circle-toggle': {
    borderRadius: '100%',
    border: `1px solid ${palette.gray[1]}`,
  },
});

// ModifyStory Container 달 때 ? 삭제
interface IBlood {
  onChange?: any;
  abo?: string;
  rh?: string;
  handleRh?: any;
}

const BloodTypeGroup: React.FC<IBlood> = ({ onChange, abo, rh, handleRh }) => {
  const [select, setSelect] = useState(false);
  const handleRhButton = () => {
    setSelect(!select);
    handleRh();
  };

  const children = [
    <ToggleButton id="circle-toggle" value="A" key="A+" aria-label="abo">
      <span>A</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="B" key="B+" aria-label="abo">
      <span>B</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="O" key="O+" aria-label="abo">
      <span>O</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="AB" key="AB+" aria-label="abo">
      <span>AB</span>
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
            value={rh}
            selected={select}
            onChange={handleRhButton}
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
        onChange={onChange}
        value={abo}
        aria-label="select type"
        size="large"
      >
        {children}
      </StyledToggleButtonGroup>
    </BloodTypeInputBlock>
  );
};

export default BloodTypeGroup;
