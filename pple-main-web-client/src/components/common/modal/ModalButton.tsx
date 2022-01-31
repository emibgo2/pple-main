import React from 'react';
import { ButtonBase, styled } from '@mui/material';
import '../../../static/fonts/fonts.css';
const StyledButton = styled(ButtonBase)({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '22px',
  textAlign: 'center',
  borderRadius: '15px',
  padding: '18px 38px',
  minWidth: '138.28px',
  fontFamily: 'Pretendard',
});

interface Props {
  text: string;
  background?: string;
  color?: string;
  onClick: React.MouseEventHandler;
}
const ModalButton: React.FC<Props> = ({ text, background, color, onClick }) => {
  return (
    <div>
      <StyledButton
        style={{
          background: background ? `${background}` : '#FF6969',
          color: color ? `${color}` : '#FFFFFF',
        }}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    </div>
  );
};

export default ModalButton;
