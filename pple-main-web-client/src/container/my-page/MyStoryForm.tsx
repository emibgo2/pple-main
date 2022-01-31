import React, { useEffect, useState } from 'react';
import MyStory from '../../components/mypage/my-story/MyStory';
import StoryBubble from '../../components/mypage/my-story/StoryBubble';
import { customAxios } from '../../lib/customAxios';
import { getCookie } from '../../lib/hooks/CookieUtil';

export type ContentType = {
  bloodProduct: Array<string>;
  content: string;
  createdAt: string;
  createdBy: number;
  lastRenewedAt: string;
  modifiedAt: string;
  modifiedBy: number;
  patient: {
    blood: {
      abo: string;
      rh: string;
    };
  };
  createdAccount: {
    blood: {
      abo: string;
      rh: string;
    };
    displayName: string;
    profileImageUrl: string;
    uuid: string;
  };
  phoneNumber: string;
  renewedCount: number;
  status: string;
  title: string;
  uuid: string;
};
const MyStoryForm = () => {
  const jwt = getCookie();
  const [content, setContent] = useState<Array<ContentType>>([]);

  useEffect(() => {
    const params = {
      page: 0,
      size: 10,
    };
    customAxios
      .get('/api/v1/donation/own', {
        params: params,
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(async res => {
        const newContent = [];
        await res.data.content.map(story => newContent.push(story));
        setContent(newContent);
        console.log(newContent);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <MyStory>
      {content.map((con: ContentType, index) => (
        <StoryBubble key={index} index={index} content={con} />
      ))}
    </MyStory>
  );
};

export default MyStoryForm;
