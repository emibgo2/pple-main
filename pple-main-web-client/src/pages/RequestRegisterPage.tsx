import React from 'react';
import RequestRegister from '../components/request/RequestRegister';
import RequestTemplate from '../components/request/RequestTemplate';

const RequestRegisterPage: React.FC = () => {
    return (
        // 환자 정보 리덕스 
        <RequestTemplate>
            <RequestRegister/>
        </RequestTemplate>
    );
};

export default RequestRegisterPage;