import React from 'react';
import RequestTemplate from '../components/request/RequestTemplate';
import RequestPostListForm from '../container/post/RequestPostListForm';

const RequestPostPage: React.FC = () => {
  return (
    <RequestTemplate>
      <RequestPostListForm />
    </RequestTemplate>
  );
};

export default RequestPostPage;
