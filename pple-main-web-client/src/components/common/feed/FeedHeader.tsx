import React from 'react';
import { styled } from '@mui/material';
import heartImg from '../../../lib/images/heart.png';
import bar from '../../../lib/images/bar.png';
import RadiusButton from '../buttons/RadiusButton';
import A from '../../../lib/images/bloodType/A+.svg';
import An from '../../../lib/images/bloodType/A+.svg';
import B from '../../../lib/images/bloodType/B+.svg';
import Bn from '../../../lib/images/bloodType/B-.svg';
import O from '../../../lib/images/bloodType/O+.svg';
import On from '../../../lib/images/bloodType/O-.svg';
import AB from '../../../lib/images/bloodType/AB+.svg';
import ABn from '../../../lib/images/bloodType/AB-.svg';

interface FeedHeaderBlockProp {
  noBorderRadius?: boolean;
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
    marginRight: '10px',
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
  buttonText: string;
  onClick?: any;
}

const FeedHeader: React.FC<CardProps> = ({
  bloodType,
  sort,
  buttonText,
  onClick,
}) => {
  const bloodTypeImg = (bloodType: string) => {
    if (bloodType == 'A+') {
      return <img src={A} alt="A+" width={60} height={60} />;
    } else if (bloodType == 'A-') {
      return <img src={An} alt="A-" width={60} height={60} />;
    } else if (bloodType == 'B+') {
      return <img src={B} alt="B+" width={60} height={60} />;
    } else if (bloodType == 'B-') {
      return <img src={Bn} alt="B-" width={60} height={60} />;
    } else if (bloodType == 'O+') {
      return <img src={O} alt="O+" width={60} height={60} />;
    } else if (bloodType == 'O-') {
      return <img src={On} alt="O-" width={60} height={60} />;
    } else if (bloodType == 'AB+') {
      return <img src={AB} alt="AB+" width={60} height={60} />;
    } else if (bloodType == 'AB-') {
      return <img src={ABn} alt="AB-" width={60} height={60} />;
    }
  };
  return (
    <FeedHeaderBlock>
      <div className="header">
        <TimeBox>
          <div>2021년 12월 13일 등록</div>
        </TimeBox>
        <CardComponentHeader>
          <div className="left">
            <CardComponentHeaderColumn>
              <div className="blood-icon">{bloodTypeImg(bloodType)}</div>
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
            <RadiusButton onClick={onClick} text={buttonText} />
          </CardComponentHeaderColumn>
        </CardComponentHeader>
      </div>
    </FeedHeaderBlock>
  );
};

export default FeedHeader;
