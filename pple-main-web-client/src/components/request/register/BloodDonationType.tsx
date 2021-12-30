import React, { useState } from 'react';
import styledComponent from 'styled-components';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  '& .MuiButtonBase-root': {
    border: 'none',
  },
  '& #square-toggle': {
    border: `1px solid ${palette.gray[1]}`,
    backgroundColor: 'white',
    minWidth: '64px',
    color: `${palette.gray[1]}`,
    padding: '1rem',
    transition: 'all ease 0.5s 0s',
    '&:focus': {
      backgroundColor:`${palette.red[1]}`,
      color: 'white',
    },
  },
});

const BloodDonationTypeBlock = Styled.div`
    width:100%;
    & #toggle-button #square-toggle{
        border-radius: 10px;
        width:100%;
    };
    & #toggle-button-half #square-toggle{
        border-radius: 10px;        
        width:50%;
    };
    & #donation-button-group {
        width:100%;
    };
`;

const ButtonGroupBox = Styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    & div{
        width:100%;
    }
`;

const BloodDonationType: React.FC = () => {
  const [type, setType] = useState('');
  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    setType(newType);
  };

  const children = [
    <div key="toggle-button" id="toggle-button">
      <ToggleButton id="square-toggle" value="전혈" key="전혈">
        <span>전혈</span>
      </ToggleButton>
    </div>,
    <div className="two-buttons" key="toggle-button" id="toggle-button-half">
      <ToggleButton
        id="square-toggle"
        value="성분체혈혈소판"
        key="성분체혈혈소판"
      >
        <span>성분체혈 혈소판</span>
      </ToggleButton>
      <ToggleButton
        id="square-toggle"
        value="성분체혈 백혈구"
        key="성분체혈 백혈구"
      >
        <span>성분체혈 백혈구</span>
      </ToggleButton>
    </div>,
    <div className="two-buttons" key="toggle-button" id="toggle-button-half">
      <ToggleButton id="square-toggle" value="농축 적혈구" key="농축 적혈구">
        <span>농축 적혈구</span>
      </ToggleButton>
      <ToggleButton
        id="square-toggle"
        value="백혈구여과제거적혈구"
        key="백혈구여과제거적혈구"
      >
        <span>백혈구여과제거적혈구</span>
      </ToggleButton>
    </div>,
  ];
  return (
    <BloodDonationTypeBlock>
      <div>헌혈 종류*</div>
      <StyledToggleButtonGroup
        exclusive
        onChange={handleType}
        value={type}
        aria-label="donation type"
        id="donation-button-group"
      >
        <ButtonGroupBox>{children}</ButtonGroupBox>
      </StyledToggleButtonGroup>
    </BloodDonationTypeBlock>
  );
};

export default BloodDonationType;
