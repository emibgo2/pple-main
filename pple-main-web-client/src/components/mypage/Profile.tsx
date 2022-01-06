import { Avatar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ProfileBlock = styled('div')({});

const Profile: React.FC = () => {
    return (
        <ProfileBlock>
            <Avatar>

            </Avatar>
        </ProfileBlock>
    );
};

export default Profile;