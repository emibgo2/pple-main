import React from 'react';
import RequestTemplate from '../components/request/RequestTemplate';
import RequestPost from '../components/request/RequestPost';

const RequestPostPage: React.FC = () => {
    return (
        <RequestTemplate>
            <RequestPost/>
        </RequestTemplate>
    );
};

export default RequestPostPage;