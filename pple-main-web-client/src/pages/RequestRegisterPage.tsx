import React from 'react';
import RequestTemplate from '../components/request/RequestTemplate';
import RequestRegister from '../components/request/register/RequestRegister3';
const RequestRegisterPage: React.FC = () => {
    return (
        // 환자 정보 리덕스 
        <RequestTemplate>
            <RequestRegister/>
        </RequestTemplate>
    );
};

export default RequestRegisterPage;