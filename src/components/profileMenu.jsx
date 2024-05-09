import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { logOutAPI } from '../api';
import { Link, useNavigate } from 'react-router-dom';

const accountLogo = 'https://i.ibb.co/Rh7KGfK/profile-eco-logo.png';

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        console.log('Logging out...');
        try {
            await logOutAPI();
            console.log('Logout successful');
            window.location.reload();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
            >
                <img
                    src={accountLogo}
                    alt="Profile Logo"
                    style={{ width: '24px', height: '24px' }}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem component={Link} to="/edituser" onClick={handleMenuClose}>
                    Edit Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default ProfileMenu;
