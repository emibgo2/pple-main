import React, { useState } from 'react';
import { styled, Input, FormControl, FormHelperText } from '@mui/material';
import palette from '../../../../lib/styles/palette';
import Label from '../../../common/Label';
import StyleInput from '../../../common/input/StyleInput';

const TitleBox = styled('div')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  marginBottom: '0px',
  padding: '0px',
});
const HelperText = styled('div')({
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '10px',
  letterSpacing: '-0.03em',
  lineHeight: '12px',
  color: '#767676',
  display: 'flex',
  alignContent: 'center',
});

interface INickname {
  nickname: string;
  onChange: any;
}

const NicknameInput: React.FC<INickname> = ({ nickname, onChange }) => {
  return (
    <>
      <TitleBox>
        <Label>닉네임</Label>
        <HelperText>
          닉네임은 10자이내 한글, 영문, 숫자만 입력 가능합니다.
        </HelperText>
      </TitleBox>
      <StyleInput
        name="nickname"
        value={nickname}
        onChange={onChange}
        id="user-nick-name"
        placeholder="10자 이내로 입력해주세요"
      />
    </>
  );
};

export default NicknameInput;
