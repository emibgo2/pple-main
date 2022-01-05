import React from 'react';
import RequestTemplate from '../components/request/RequestTemplate';
import RequestPost from '../components/request/post/RequestPost3';
import RequestPostList from '../components/request/post/RequestPostList';
const RequestPostPage: React.FC = () => {
    return (
        <RequestTemplate>
            <RequestPostList/>
        </RequestTemplate>
    );
};

export default RequestPostPage;