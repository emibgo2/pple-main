import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Subract from '../../lib/images/Subtract.png';
import IconButton from '@mui/material/IconButton';
import applogo from '../../lib/images/Ellipse 2.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const GlobalNavigationBarBlock = styled.div`
  width: initial;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px;
  background: ${palette.gray[0]};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
`;

const ColumnBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  color: ${palette.gray[2]};
  & > img {
    margin-right: 10px;
  }
`;

const BloodTypeBlock = styled.div`
  margin: 0px 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1px 5px;
`;

const GlobalNavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <GlobalNavigationBarBlock>
      <ColumnBlock>
        <img src={applogo} alt="임시 프로필" />
        <span>피플</span>
      </ColumnBlock>
      <ColumnBlock>
        <img src={Subract} alt="임시 프로필" />
        <span>에이호프님</span>
        <BloodTypeBlock>AB+</BloodTypeBlock>
        <IconButton
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </ColumnBlock>
    </GlobalNavigationBarBlock>
  );
};

export default GlobalNavigationBar;
