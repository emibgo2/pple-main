/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { InputLabel } from '@mui/material';

import styled from 'styled-components';
import { Button } from '@mui/material';

const BloodTypeToggleButtonBlock = styled.div`
& .MuiButtonBase-root{
     margin-right: 100px;
     box-shadow:none;
     border:none;
     border: 1px solid black;
 }
`;

interface Props {
    text: string;
}

const BloodTypeToggleButton: React.FC<Props> = ({text}) => {
    const [selected, setSelected] = React.useState(false);
  return (
    <BloodTypeToggleButtonBlock>
    <InputLabel>
        {text}
    </InputLabel>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
        A
    </ToggleButton>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
        B
    </ToggleButton>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
        O
    </ToggleButton>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
        AB
    </ToggleButton>
    
    </BloodTypeToggleButtonBlock>
  );
};

export default BloodTypeToggleButton;
