import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileToolbar from '../../navigation/MobileToolbar';

const RequestPostList: React.FC = () => {
    const navigate = useNavigate();
    const onClick: MouseEventHandler = () =>{
        navigate('/');
    }
    const onIconClick: MouseEventHandler = () =>{
        navigate('/post/register');
    }

    return (
      <div>
        <MobileToolbar title="요청하기" isBack={true} isWrite={true} />
      </div>
    );
};

export default RequestPostList;