import React, { useState } from 'react';
import { Menu, useTheme, Button, MenuItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const DesktopMenu = ({ categories, isTabletOrSmaller }) => {
    const theme = useTheme()
    
    const [anchorEl, setAnchorEl] = useState(null); //This state is to control the opening and closing of the slide-out nav, 
    const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch
  
    const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
        setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
    };
  
    const handleCloseMenu = () => {
        setAnchorEl(null)
    };
  
  return (
   <>
        {
              categories.slice(0, 4).map((route, index) => (
                <Button
                key={index}
                component={Link}
                to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}
                variant="text"
                sx={{ color: 'white', fontSize: '0.9rem', textTransform: 'capitalize' }}
                >
                    {route.name}
                  </Button>
                ))
        }
        {!isTabletOrSmaller && categories.length > 4 && (
            <Button variant="text" sx={{ color: 'white'}} onClick={handleOpenMenu}>
            More
            </Button>
            
          )}
        {
           !isTabletOrSmaller && (
            <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleCloseMenu}
            slotProps={{ paper: { style: { backgroundColor: theme.palette.primary.main} } }} 

          >
            
            {categories.slice(4).map(route => (
              <MenuItem onClick={handleCloseMenu} key={route.name}>
                <ListItemText>
                   <Link style={{ textDecoration: 'none', color: 'white' }} to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>{route.name}</Link>
                </ListItemText>
              </MenuItem>
            ))}
          </Menu>
           ) 
        }
        </>

  )}

export default DesktopMenu;


