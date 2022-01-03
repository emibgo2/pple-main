import React from 'react';
import { styled } from '@mui/material';

const Template = styled('div')({
  '& .nick-name': {
      display:"flex",
      alignItems:"center",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13.4866px',
    lineHeight: '16px',
    letterSpacing: '-0.03em',
    color: '#222222',
  },
  display: 'flex',
  alignContent:'center',
});
const BloodBox = styled('div')({
    marginLeft:"9.35px",
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '9.92475px',
  lineHeight: '12px',
  letterSpacing: '-0.03em',
  color: '#767676',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.34866px 5.39464px',
  border: '0.992475px solid #717171',
  boxSizing: 'border-box',
  borderRadius: '9.92475px',
});

interface Info {
  nickname: string;
  bloodType: string;
}

const NickNameWithBloodType: React.FC<Info> = ({ nickname, bloodType }) => {
  return (
    <Template>
      <div className="nick-name">{nickname}</div>
      <BloodBox>{bloodType}</BloodBox>
    </Template>
  );
};

export default NickNameWithBloodType;
