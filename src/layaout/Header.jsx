import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../components/cart/Cart';
import ProfileMenu from '../components/profileMenu';
import { useSelector } from 'react-redux';
import { getCategoriesAPI } from '../api';

const Logo = 'https://i.ibb.co/QPGLK94/ECO.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isMobile = useMediaQuery('(max-width:600px)');


  const [anchorEl, setAnchorEl] = useState(null); //This state is to control the opening and closing of the slide-out nav, 
  const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch

  const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
      setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
  };

  const handleCloseMenu = () => {
      setAnchorEl(null)
  };


  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategoriesAPI();
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>  {/*Toolbar groups elements within the navegation bar*/ }
        <Box>
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
          </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {isMobile ? (
            <> 
            <IconButton onClick={handleOpenMenu} style={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleCloseMenu}
            > 
              {
              categories.map(route => (
                  //it's important to close the menu with handleCloseMenu when the category is selected.
                  <MenuItem onClick={handleCloseMenu} key={route.name}>
                      {/*Using regex to convert string with spaces into string with hypes to match the url pattern */}
                      <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>{route.name}</Link>
                  </MenuItem>
              ))
              } 
            </Menu>
            </>
        ) : ( 
            
            categories.map((route, index) => (
              <Button
                key={index}
                component={Link}
                to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}
                variant="text"
                color="inherit"
                sx={{ fontSize: '1rem', textTransform: 'capitalize' }}
              >
                {route.name}
              </Button>
            ))
          )}
          {!isMobile && categories.length > 4 && (
            <Button variant="text" color="inherit" onClick={handleOpenMenu}>
              More
            </Button>
          )}
         
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isAuth ? (
            <>
              <Link to="/login">
                <Button variant="contained">Sign in</Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained">Sign up</Button>
              </Link>
            </>
          ) : (
            <ProfileMenu />
          )}
          <IconButton size="large" aria-label="cart">
            <Cart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
