import React from 'react';
import { styled, Paper, InputBase, IconButton } from '@mui/material';
import palette from '../../lib/styles/palette';
import searchImg from '../../lib/images/Search.png';

const SearchInputBlock = styled('div')({
  margin: '20px 0px',
  width: '100%',
  '& .MuiPaper-root': {
    backgroundColor: `${palette.gray[0]}`,
    color: `${palette.gray[1]}`,
    borderRadius: '15px',
    padding: '0.5rem 1rem 0.5rem 0.5rem',
  },
});

const SearchComponentsBox = styled('div')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
});

const SearchInput: React.FC = () => {
  return (
    <SearchInputBlock>
      <Paper elevation={0}>
        <SearchComponentsBox>
          <InputBase
            placeholder="요청을 검색해 보세요"
            sx={{ ml: 1, flex: 1, fontWeight: 'bold' }}
            inputProps={{ 'aria-label': 'search request feed' }}
          ></InputBase>
          <IconButton
            type="submit"
            sx={{ p: '10px', justifyContent: 'flex-end' }}
            aria-label="search"
          >
            <img src={searchImg} alt="검색 버튼" />
          </IconButton>
        </SearchComponentsBox>
      </Paper>
    </SearchInputBlock>
  );
};

export default SearchInput;
