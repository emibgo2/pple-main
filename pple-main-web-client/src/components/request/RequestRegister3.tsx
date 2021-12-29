import React from 'react';
import styled from 'styled-components';
import { InputLabel, TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RadiusButton from '../common/buttons/RadiusButtonWithDownDrop';
import BloodTypeToggleButton from '../common/BloodTypeToggleButton';
import { Button } from '@mui/material';

const RequestRegisterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LoadButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputPatientInfo = styled.div`

`;
const RequestRegisterFooter = styled.div`
    
`;

const RequestRegister: React.FC = () => {
  return (
    <>
      <RequestRegisterHeader>
        <h1>요청하기</h1>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </RequestRegisterHeader>

      <LoadButtonBox>
        <div>
          <IconButton>
            <InsertPhotoOutlinedIcon />
            <span>사진</span>
          </IconButton>
          <IconButton>
            <FileDownloadOutlinedIcon />
            <span>게시글 저장</span>
          </IconButton>
        </div>

        <RadiusButton text="내정보 불러오기" />
      </LoadButtonBox>

      <hr />

      <InputBody>
        <div>
          <TextField
            focused
            label="제목"
            variant="standard"
            placeholder="제목"
            fullWidth
          />
        </div>
        <div>
          <TextField
            variant="standard"
            placeholder="내용"
            multiline
            rows={10}
            fullWidth
          />
        </div>
      </InputBody>

      <InputPatientInfo>
        <div>
          <InputLabel shrink>환자명을 입력해주세요</InputLabel>
          <TextField required />
          <InputLabel shrink>필요한 혈액성분을 입력해주세요</InputLabel>
          <TextField required />
        </div>
        <div>
          <InputLabel shrink>생년월일</InputLabel>
          <TextField required />
          <InputLabel shrink>의료기관명</InputLabel>
          <TextField required />
          <InputLabel shrink>병실호수</InputLabel>
          <TextField required />
        </div>
        <div>
            <BloodTypeToggleButton text="혈액형"/>
        </div>
      </InputPatientInfo>
      <RequestRegisterFooter>
          <Button>취소</Button>
          <Button>등록</Button>
      </RequestRegisterFooter>
    </>
  );
};

export default RequestRegister;
