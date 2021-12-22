import React from 'react';
import styled from 'styled-components';

const BloodTypeBox = styled.div`
  margin: 0px 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1px 5px;
  text-align:center;
`;

interface Props{ 
    text : string,
}

const BloodTypeBlock:React.FC<Props> = ({text}) => {
    return (
        <BloodTypeBox>
            {text}
        </BloodTypeBox>
    );
};

export default BloodTypeBlock;