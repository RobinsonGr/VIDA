import React, { useState } from 'react';
import { Menu, useTheme, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = ({ categories, isTabletOrSmaller }) => {
    const theme = useTheme()
    
    const [anchorEl, setAnchorEl] = useState(true); //This state is to control the opening and closing of the slide-out nav, 
    const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch
  
    const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
        setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
    };
  
    const handleCloseMenu = () => {
        setAnchorEl(null)
    };
    console.log('he')


    console.log(categories)
  return (
   <>
        {
              categories.slice(0, 4).map((route, index) => (
                <Button
                key={index}
                component={Link}
                to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}
                variant="text"
                color="inherit"
                sx={{ fontSize: '0.9rem', textTransform: 'capitalize' }}
                >
                    {route.name}
                  </Button>
                ))
        }
        {/* {!isTabletOrSmaller && categories.length > 4 && (
            <Button variant="text" color="inherit" onClick={handleOpenMenu}>
            More
            </Button>
            
          )}
        {
           !isTabletOrSmaller && (
            <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleCloseMenu}
          >
            {categories.slice(4).map(route => (
              <MenuItem onClick={handleCloseMenu} key={route.name}>
                <ListItemText>
                   <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}></Link>
                </ListItemText>
              </MenuItem>
            ))}
          </Menu>
           ) 
        } */}
        </>

  )}

export default Menu;


