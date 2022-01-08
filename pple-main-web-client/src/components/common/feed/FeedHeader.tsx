import React from 'react';
import { styled } from '@mui/material';
import heartImg from '../../../lib/images/heart.png';
import bar from '../../../lib/images/bar.png';
import RadiusButton from '../buttons/RadiusButton';

interface FeedHeaderBlockProp{
  noBorderRadius?: boolean
}
const FeedHeaderBlock = styled('div')<FeedHeaderBlockProp>(
  ({ noBorderRadius }) => ({
    width: '100%',
    borderRadius: '14px',
    '& .header': {
      backgroundColor: 'whitesmoke',
      padding: '9px 22px',
      borderRadius: !noBorderRadius ? '14px 14px 0px 0px' : '0px 0px 0px 0px',
    },
  }),
);

const TimeBox = styled('div')({
  fontSize: 'x-small',
  width: '100%',
  textAlign: 'right',
  boxSizing: 'border-box',
});

const CardComponentHeader = styled('div')({
  display: 'flex',
  alignItems: ' center',
  justifyContent: 'space-between',
  '& .left': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .middle': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .middle .bar': {
    marginRight: '8px',
  },
  '& .middle .header-text .header-text-title': {
    color: 'gray',
    fontSize: 'smaller',
  },
});

const CardComponentHeaderColumn = styled('div')({
  '& .blood-icon': {
    position: 'relative',
    marginRight:'10px',
  },
  '& .blood-icon .card-text': {
    position: 'absolute',
    left: '25%',
    bottom: '35%',
    color: 'white',
    fontWeight: 'bold',
  },
});

interface CardProps {
  bloodType: string;
  sort: string;
  noBorderRadius?: boolean;
}

const FeedHeader: React.FC<CardProps> = ({
  bloodType,
  sort,
  noBorderRadius,
}) => {
  return (
    <FeedHeaderBlock noBorderRadius={noBorderRadius}>
      <div className="header">
        <TimeBox>
          <div>2021년 12월 13일 등록</div>
        </TimeBox>
        <CardComponentHeader>
          <div className="left">
            <CardComponentHeaderColumn>
              <div className="blood-icon">
                <div className="card-img">
                  <img src={heartImg} alt="하트이미지" />
                </div>
                <div className="card-text">{bloodType}</div>
              </div>
            </CardComponentHeaderColumn>

            <CardComponentHeaderColumn className="middle">
              <div className="bar">
                <img src={bar} alt="체온계이미지"></img>
              </div>
              <div className="header-text">
                <div className="header-text-title">헌혈 종류</div>
                <div
                  style={{
                    color: '#FF6969',
                    fontWeight: 'bold',
                    marginTop: '5px',
                  }}
                >
                  {sort}
                </div>
              </div>
            </CardComponentHeaderColumn>
          </div>
          <CardComponentHeaderColumn>
            <RadiusButton text="도움주기" />
          </CardComponentHeaderColumn>
        </CardComponentHeader>
      </div>
    </FeedHeaderBlock>
  );
};

export default FeedHeader;
