import React from 'react';
import styled from 'styled-components';

const Divide = styled.div`
  border-right: 1px solid gray;
  opacity: 0.4;
`;
const Divider: React.FC = () => {
    return (
        <Divide/>
    );
};

export default Divider;