import React, { MouseEventHandler, useState } from 'react';
import { Button, Fade, Menu, MenuItem, MenuList, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import palette from '../../../lib/styles/palette';
const StyledButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
  backgroundColor: 'white',
  color: `${palette.gray[1]}`,
  fontSize:'small',
  padding:'5px 10px',
  marginRight:'0.5rem',
  '&:hover': {
    backgroundColor: `${palette.red[2]}`,
    color: 'white',
    borderColor: '#FF6980',
    boxShadow: 'none',
  },
});

// 드롭 메뉴 배경 커스텀 
const StyledMenuList = styled(MenuList)({
})


interface Props {
  title: string;
  list: Array<string>;
}

const RadiusButtonWithDownDrop: React.FC<Props> = ({ title, list }) => {
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <div>
      <StyledButton id="drop-button" variant="contained" onClick={handleClick}>
        <span>{title}</span>
        <ArrowDropDownIcon />
      </StyledButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <StyledMenuList>
          {list.map((item, idx) => (
            <MenuItem key={idx} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </StyledMenuList>
      </Menu>
    </div>
  );
};

export default RadiusButtonWithDownDrop;
