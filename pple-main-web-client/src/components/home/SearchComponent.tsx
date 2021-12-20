import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DropButton from './dropdown/DropButton';

const SearchComponentBlock = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
`;

const ButtonBox = styled.div`
 display:flex;
 align-items: center;
 & > div {
   margin-right:8px;
    min-width: fit-content;
  }
 & .MuiButton-root{
  min-width:fit-content;   
 }
`;

const SearchComponent = () => {
  return (
    <SearchComponentBlock>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 600,
          background: '#F4F4F4',
          borderRadius: '8px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="게시글을 검색해보세요"
          inputProps={{ 'aria-label': 'search posting' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <ButtonBox>
        <div>검색 조건 : </div>
        <DropButton>혈액형</DropButton>
        <DropButton>헌혈 종류</DropButton>
        <DropButton>필요 횟수</DropButton>
      </ButtonBox>
    </SearchComponentBlock>
  );
};

export default SearchComponent;
