import React, { useEffect, useState } from 'react';
import { FilterType } from '../../components/home/CardTemplate';
import FeedTemplate from '../../components/request/post/feed/FeedTemplate';
import RequestPostList from '../../components/request/post/RequestPostList';
import { customAxios } from '../../lib/customAxios';

const RenderPost = (contentArray: any) => {
  return contentArray.map((content, idx) => (
    <FeedTemplate
      key={content.uuid}
      title={content.title}
      content={content.content}
      sort={content.bloodProduct[0]}
      bloodType={
        content.patient.blood.rh == 'POSITIVE'
          ? `${content.patient.blood.abo}+`
          : `${content.patient.blood.abo}-`
      }
      time={content.createdAt}
      phoneNumber={content.phoneNumber}
      displayName={content.createdAccount.displayName}
      profileImageUrl={content.createdAccount.profileImageUrl}
    />
  ));
};

const FilterBloodType = (bloodType: string, contentArray: any) => {
  return contentArray.map((content, idx) =>
    content.patient.blood.abo == bloodType.replace('형', '') ? (
      <FeedTemplate
        key={content.uuid}
        title={content.title}
        content={content.content}
        sort={content.bloodProduct[0]}
        bloodType={
          content.patient.blood.rh == 'POSITIVE'
            ? `${content.patient.blood.abo}+`
            : `${content.patient.blood.abo}-`
        }
        time={content.createdAt}
        phoneNumber={content.phoneNumber}
        displayName={content.createdAccount.displayName}
        profileImageUrl={content.createdAccount.profileImageUrl}
      />
    ) : (
      <div key={idx}></div>
    ),
  );
};

const ChangeBloodProductValue = (bloodProduct: string) => {
  switch (bloodProduct) {
    case '전혈':
      return 'WHOLE';
    case '성분채혈 혈소판':
      return 'PLATELET';
    case '성분채혈 백혈구':
      return 'LEUKOCYTE';
    case '농축적혈구':
      return 'PACKED_RED_BLOOD_CELL';
    case '백혈구여과제거적혈구':
      return 'LEUKOCYTE_REDUCED_RED_BLOOD_CELL';
    default:
      break;
  }
};

const FilterBloodProduct = (bloodProduct: string, contentArray: any) => {
  return contentArray.map((content, idx) =>
    content.bloodProduct[0] == ChangeBloodProductValue(bloodProduct) ? (
      <FeedTemplate
        key={content.uuid}
        title={content.title}
        content={content.content}
        sort={content.bloodProduct[0]}
        bloodType={
          content.patient.blood.rh == 'POSITIVE'
            ? `${content.patient.blood.abo}+`
            : `${content.patient.blood.abo}-`
        }
        time={content.createdAt}
        phoneNumber={content.phoneNumber}
        displayName={content.createdAccount.displayName}
        profileImageUrl={content.createdAccount.profileImageUrl}
      />
    ) : (
      <div key={idx}></div>
    ),
  );
};

const FilterBloodTypeAndBloodProduct = (
  bloodType: string,
  bloodProduct: string,
  contentArray,
) => {
  return contentArray.map((content, idx) =>
    content.patient.blood.abo == bloodType.replace('형', '') &&
    content.bloodProduct[0] == ChangeBloodProductValue(bloodProduct) ? (
      <FeedTemplate
        key={idx}
        title={content.title}
        content={content.content}
        sort={content.bloodProduct[0]}
        bloodType={
          content.patient.blood.rh == 'POSITIVE'
            ? `${content.patient.blood.abo}+`
            : `${content.patient.blood.abo}-`
        }
        time={content.createdAt}
        phoneNumber={content.phoneNumber}
        displayName={content.createdAccount.displayName}
        profileImageUrl={content.createdAccount.profileImageUrl}
      />
    ) : (
      <div key={idx}></div>
    ),
  );
};

const RequestPostListForm: React.FC = () => {
  const [contentArray, setContentArray] = useState([]);
  const [filter, setFilter] = useState<FilterType>({
    bloodType: null,
    bloodProduct: null,
  });
  useEffect(() => {
    customAxios
      .get('api/v1/donation')
      .then(res => {
        const newArray = res.data.content;
        setContentArray(newArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <RequestPostList filter={filter} setFilter={setFilter}>
      {filter.bloodProduct && filter.bloodType
        ? FilterBloodTypeAndBloodProduct(
            filter.bloodType,
            filter.bloodProduct,
            contentArray,
          )
        : filter.bloodProduct
        ? FilterBloodProduct(filter.bloodProduct, contentArray)
        : filter.bloodType
        ? FilterBloodType(filter.bloodType, contentArray)
        : RenderPost(contentArray)}
    </RequestPostList>
  );
};

export default RequestPostListForm;
