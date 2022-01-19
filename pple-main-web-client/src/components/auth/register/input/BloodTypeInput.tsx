import React, { useState } from 'react';
import {
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import palette from '../../../../lib/styles/palette';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Label from '../../../common/Label';
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

interface IType {
  type: string;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)<IType>(
  ({ type }) => ({
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
  }),
);

interface IBloodType {
  blood: {
    rh: string;
    abo: string;
  };

  handleBloodType: any;
  handleRh: any;
}

const BloodTypeInput: React.FC<IBloodType> = ({
  blood,
  handleBloodType,
  handleRh,
}) => {
  // 토글 버튼 UI 관련 변수
  const [select, setSelect] = useState(false);
  const [alignment, setAlignment] = React.useState<string | null>('A');

  const handleAlignment = (newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  const onChange = async (e: any) => {
    const { value } = e.target;
    if (value != undefined) {
      handleAlignment(value);
      handleBloodType(value);
      return;
    }
    console.log('뭐가 문제지..');
  };

  const handleRhChange = () => {
    setSelect(!select);
    handleRh();
  };

  const children = [
    <ToggleButton id="circle-toggle" value="A" key="A+">
      <span>A</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="B" key="B+">
      <span>B</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="O" key="O+">
      <span>O</span>
    </ToggleButton>,
    <ToggleButton id="circle-toggle" value="AB" key="AB+">
      <span>AB</span>
    </ToggleButton>,
  ];
  return (
    <BloodTypeInputBlock>
      <div className="title">
        <Label>본인 혈액형</Label>
        <div>
          <ToggleButton
            sx={{
              color: select ? 'black' : 'white',
              background: 'none',
            }}
            value={blood.rh}
            selected={select}
            onChange={handleRhChange}
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
        value={alignment}
        type={blood.abo}
        aria-label="select type"
        size="large"
        onChange={onChange}
      >
        {children}
      </StyledToggleButtonGroup>
    </BloodTypeInputBlock>
  );
};

export default BloodTypeInput;
