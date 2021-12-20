import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import CardComponent from './CardComponent';
import {Pagination} from '@mui/material';

const CardContainerBlock = styled.div`
  width: 100%;
  padding: 30px 0px;
  display:flex;
  flex-direction:column;
    justify-content: center;
    align-items: center;
& .pagination{
    margin-top:20px;
}
`;

const CardTemplate = () => {
  return (
    <CardContainerBlock>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, md: 8, lg:12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>
      <div className='pagination'>
        <Pagination count={10}/>
      </div>
    </CardContainerBlock>
  );
};

export default CardTemplate;
