import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const AuthTemplateBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;

interface Props {
  children: JSX.Element[] | JSX.Element
}
const AuthTemplate= ({children}:Props) => {
  return (
    <>
    <AuthTemplateBlock>
      {children}
    </AuthTemplateBlock>
    </>
  );
};

export default AuthTemplate;
