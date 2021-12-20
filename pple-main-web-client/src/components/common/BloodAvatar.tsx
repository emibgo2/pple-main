import React from 'react';
import Ap from '../../lib/images/bloodType/A+.svg';
import Am from '../../lib/images/bloodType/A-.svg';
import Bp from '../../lib/images/bloodType/B+.svg';
import Bm from '../../lib/images/bloodType/B-.svg';
import Op from '../../lib/images/bloodType/O+.svg';
import Om from '../../lib/images/bloodType/O-.svg';
import ABp from '../../lib/images/bloodType/AB+.svg';
import ABm from '../../lib/images/bloodType/AB-.svg';

const returnBloodImg = (type: string) => {
  switch (type) {
    case 'a+':
      return <img src={Ap} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'a-':
      return <img src={Am} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'b+':
      return <img src={Bp} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'b-':
      return <img src={Bm} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'o+':
      return <img src={Op} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'o-':
      return <img src={Om} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'ab+':
      return <img src={ABp} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    case 'ab-':
      return <img src={ABm} alt="A+ 혈액 이모티콘" width={60} height={60} />;
    default:
      return <img src={Am} alt="A+ 혈액 이모티콘" width={60} height={60} />;
  }
};

const BloodAvatar = ({ type }: any) => {
  return <>{returnBloodImg(type)}</>;
};

export default BloodAvatar;
