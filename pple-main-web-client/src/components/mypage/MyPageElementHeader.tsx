import React from 'react';
import { styled,IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const Block = styled('div')({
  display: 'flex',
  alignContent: 'center',
  padding: '12px 0px 12px 14px',
  color: '#222222',
  fontWeight: 'bold',
  '& .icon': {
    width: '33%',
  },
  '& .title': {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateX(-10%)',
  },
  '& .blank': {
    width: '33%',
  },
});

interface IHeader{
    title: string, 
}

const MyPageElementHeader: React.FC<IHeader> = ({title}) => {
    const navigate = useNavigate(); 
    const handleBack = ()=>{
        navigate(-1);
    }

    return (
      <Block>
        <div className="icon">
          <IconButton onClick={handleBack}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        </div>

        <div className="title">{title}</div>
        <div className='blank'></div>
      </Block>
    );
};

export default MyPageElementHeader;