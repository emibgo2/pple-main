import React, { useState } from 'react';
import produce from 'immer';
import RequestRegister from '../../components/request/register/RequestRegister';
import { customAxios } from '../../lib/customAxios';
import { getCookie } from '../../lib/hooks/CookieUtil';
import { useSelector } from 'react-redux';
import { RootState } from '../../models';

export type RequestState = {
  bloodProduct: string[];
  content: string;
  abo: string;
  rh: string;
  first: string;
  second: string;
  third: string;
  title: string;
};

const RequestRegisterForm: React.FC = () => {
  const [post, setPost] = useState<RequestState>({
    bloodProduct: [],
    content: '',
    abo: 'A',
    rh: 'POSITIVE',
    first: '',
    second: '',
    third: '',
    title: '',
  });
  const jwt = getCookie();
  const uuid = useSelector((state: RootState) => state.account.uuid);
  const onChange = (e: { target: HTMLInputElement | HTMLButtonElement }) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleRh = () => {
    if (post.rh == 'POSITIVE') {
      setPost({
        ...post,
        rh: 'NEGATIVE',
      });
      return;
    }
    setPost({
      ...post,
      rh: 'POSITIVE',
    });
  };

  const handleBloodType = (e: {
    target: HTMLInputElement | HTMLButtonElement;
  }) => {
    const { ariaLabel, value } = e.target;
    setPost({
      ...post,
      [ariaLabel]: value,
    });
  };

  // 핸드폰 정보
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 숫자만 입력 받기
    const onlyNumber = value.replace(/[^0-9]/g, '');
    // 첫 번째 자리
    if (name === 'first') {
      if (onlyNumber.length <= 3) {
        setPost({
          ...post,
          [name]: onlyNumber,
        });
      }
      return;
    }
    // 두 번째 자리
    else if (name === 'second') {
      if (onlyNumber.length <= 4) {
        setPost({
          ...post,
          [name]: onlyNumber,
        });
      }
    }
    // 세 번쨰 자리
    else {
      if (onlyNumber.length <= 4) {
        setPost({
          ...post,
          [name]: onlyNumber,
        });
      }
    }
  };

  const handleBloodProduction = (e: React.ChangeEvent<HTMLButtonElement>) => {
    const { ariaPressed, value } = e.target;
    console.log(ariaPressed);
    console.log(value);
    // 헌혈 종류를 선택했을 때
    if (ariaPressed == 'false') {
      const newArr = [...post.bloodProduct];
      newArr.push(value);
      setPost({
        ...post,
        bloodProduct: newArr,
      });
      return;
    }
    // 헌혈 종류 선택 해제 했을 때
    const newArr = [...post.bloodProduct].filter(product => {
      return product !== value;
    });
    console.log(newArr);
    setPost({
      ...post,
      bloodProduct: newArr,
    });
  };

  const onClick = () => {
    console.log(post);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const body = {
      bloodProduct: [...post.bloodProduct],
      content: post.content,
      patient: {
        blood: {
          abo: post.abo,
          rh: post.rh,
        },
      },
      phoneNumber: post.first + post.second + post.third,
      title: post.title,
    };
    console.log(body);
    customAxios
      .post('/api/v1/donation', body, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(res => {
        console.log(res);
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <RequestRegister
          post={post}
          onChange={onChange}
          handleRh={handleRh}
          handleBloodType={handleBloodType}
          handlePhoneNumber={handlePhoneNumber}
          handleBloodProduction={handleBloodProduction}
        />
        <button onClick={onClick}> test </button>
      </form>
    </>
  );
};

export default RequestRegisterForm;