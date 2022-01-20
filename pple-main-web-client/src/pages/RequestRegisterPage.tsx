import React from 'react';
import RequestTemplate from '../components/request/RequestTemplate';
import RequestRegisterForm from '../container/post/RequestRegisterForm';
const RequestRegisterPage: React.FC = () => {
  return (
    // 환자 정보 리덕스
    <RequestTemplate>
      <RequestRegisterForm />
    </RequestTemplate>
  );
};

export default RequestRegisterPage;
