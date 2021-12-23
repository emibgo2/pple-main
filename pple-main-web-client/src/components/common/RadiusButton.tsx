import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* display: flex;
  flex-direction: row;
  align-items: flex-start; */
  background: #767676;
  border-radius: 20px;
  padding: 6px 9px;
  color:white;
`;

type Props = {
    text : string,
    isDisabled? : boolean
}

const RadiusButton:React.FC<Props> = ({text,isDisabled}) => {
  return <StyledButton disabled={isDisabled}>{text}</StyledButton>;
};

export default RadiusButton;
