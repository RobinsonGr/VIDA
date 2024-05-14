import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, ListItemText, useTheme, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileMenu = ({ categories }) => {
    const theme = useTheme()
    
    const [anchorEl, setAnchorEl] = useState(null); //This state is to control the opening and closing of the slide-out nav, 
    const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch
    const isAuth = useSelector(state => state.auth.isAuth);

  
    const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
        setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
    };
  
    const handleCloseMenu = () => {
        setAnchorEl(null)
    };


  return (
    <>
    <IconButton onClick={handleOpenMenu} style={{ color: 'white' }}>
      <MenuIcon />
    </IconButton>

    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleCloseMenu}
      slotProps={{ paper: { style: { backgroundColor: theme.palette.primary.main} } }} 
      > 

      {!isAuth && (
         <>
            <MenuItem style={{ textDecoration: 'none', color: theme.palette.primary.light }}>  
            <Link style={{ textDecoration: 'none', color: theme.palette.primary.light }} to="/login">Sign in</Link>
          </MenuItem>
    
          <MenuItem> 
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Sign up</Link>
          </MenuItem>
            </>
      )}
     
      {
        categories.map(route => (
          //it's important to close the menu with handleCloseMenu when the category is selected.
          <MenuItem 
          
          onClick={handleCloseMenu} key={route.name}>
              <ListItemText>
               <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}` } style={{ textDecoration: 'none', color: 'white' }}>{route.name}</Link>
              </ListItemText>
          </MenuItem>
      ))
    } 
    </Menu>
    
    </>
  );
};

export default MobileMenu;
