import React from 'react';
import { styled,Input,FormControl,FormHelperText } from '@mui/material';
import palette from '../../../../lib/styles/palette';
import Label from '../../../common/Label';
const InputNickname = styled(Input)({
  '& .help-text': {
    fontSize: 'small',
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    borderBottom: `1px solid ${palette.gray[1]}`,
    width: 'auto',
  },
  '& .MuiInputBase-input placeholder': {
    color: `${palette.gray[1]}`,
  },
});


const NicknameInput: React.FC = () => {
    return (
      <FormControl variant="standard" fullWidth className="form">
        <Label>닉네임</Label>
        <InputNickname
          placeholder="10자 이내로 입력해주세요"
          id="input-nickname"
          fullWidth
        />
        <FormHelperText className="help-text">
          닉네임은 10자이내 한글, 영문, 숫자만 입력 가능합니다.
        </FormHelperText>
      </FormControl>
    );
};

export default NicknameInput;