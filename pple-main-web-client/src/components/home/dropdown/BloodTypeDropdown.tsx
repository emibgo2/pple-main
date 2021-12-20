import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Menu, MenuProps } from '@mui/material';
import DropButton from './DropButton';


const BloodTypeDropdown = () => {
    return (
        <div>
            <DropButton>
                헐액형
            </DropButton>
        </div>
    );
};

export default BloodTypeDropdown;