import React from 'react';
import styled from 'styled-components'; 

const RequestTemplateBlock = styled.div`
  
`;

interface Props {
    children: JSX.Element[] | JSX.Element
}
  
const RequestTemplate:React.FC<Props> = ({children}) => {
    return (
        <RequestTemplateBlock>
            {children}
        </RequestTemplateBlock>
    );
};

export default RequestTemplate;