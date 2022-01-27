import React, { useEffect, useState } from 'react';
import FeedTemplate from '../../components/request/post/feed/FeedTemplate';
import RequestPostList from '../../components/request/post/RequestPostList';
import { customAxios } from '../../lib/customAxios';

const RequestPostListForm: React.FC = () => {
  const [contentArray, setContentArray] = useState([]);
  useEffect(() => {
    customAxios
      .get('api/v1/donation')
      .then(res => {
        const newArray = res.data.content;
        setContentArray(newArray);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <RequestPostList>
      {contentArray.map((content, index) => (
        <FeedTemplate
          key={index}
          bloodType={
            content.patient.blood.rh == 'POSITIVE'
              ? `${content.patient.blood.abo}+`
              : `${content.patient.blood.abo}-`
          }
          sort={content.bloodProduct[0]}
          time={content.createdAt}
          displayName={content.displayName}
          title={content.title}
          content={content.content}
          phoneNumber={content.phoneNumber}
        />
      ))}
    </RequestPostList>
  );
};

export default RequestPostListForm;
