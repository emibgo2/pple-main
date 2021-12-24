import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px 0px 0px;
`;

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AuthTemplate: React.FC<Props>= ({children}) => {
  return (
    <>
    <AuthTemplateBlock>
      {children}
    </AuthTemplateBlock>
    </>
  );
};

export default AuthTemplate;
