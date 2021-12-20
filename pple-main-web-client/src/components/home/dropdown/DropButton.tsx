import React from 'react';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const sx ={
    background : "white",
    padding: "4px 20px 4px 24px",
    border: "1px solid #B7B7B7",
    borderRadius: "30px",
    color:"gray",
}

const DropButton:React.FC = ({children}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <Button
            sx={sx}
            aria-controls="blood-type-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="outlined"
            color="error"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            >
                {children}
            </Button>            
        </div>
    );
};

export default DropButton;