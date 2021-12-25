import React from 'react';
import RequestRegister from '../components/request/RequestRegister';
import RequestTemplate from '../components/request/RequestTemplate';

const RequestRegisterPage: React.FC = () => {
    return (
        <RequestTemplate>
            <RequestRegister/>
        </RequestTemplate>
    );
};

export default RequestRegisterPage;