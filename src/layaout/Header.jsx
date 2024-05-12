import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, ListItemText, Toolbar, IconButton, Menu, MenuList, MenuItem, Paper, Button, Box, useMediaQuery, Grid, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../components/cart/Cart';
import ProfileMenu from '../components/profileMenu';
import { useSelector } from 'react-redux';
import { getCategoriesAPI } from '../api';
import MobileMenu from '../components/header/MobileMenu';

const Logo = 'https://i.ibb.co/QPGLK94/ECO.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isTabletOrSmaller  = useMediaQuery('(max-width:950px)');
  const location = useLocation();
  const shouldApplyMarginBottom = !(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup');
  const theme = useTheme()


  // const [anchorEl, setAnchorEl] = useState(null); //This state is to control the opening and closing of the slide-out nav, 
  // const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch

  // const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
  //     setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
  // };

  // const handleCloseMenu = () => {
  //     setAnchorEl(null)
  // };


  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategoriesAPI();
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  return (
    <AppBar position="static" style={shouldApplyMarginBottom ? { marginBottom: '2rem' } : null} >
      <Toolbar> 
        <Grid container wrap="nowrap" alignItems="center"> 
          <Grid item xs={1} {...(isTabletOrSmaller ? { order: 2 } : {})}>
            <Box>
              <img src={Logo} alt="Logo" style={{ height: '40px' }} />
            </Box>
          </Grid>
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
          <Grid item {...(isTabletOrSmaller ? { order: 1 } : {})} sx={{ display: 'flex', justifyContent: 'flex-start' }} xs={1} md={9}>                  
          {isTabletOrSmaller ? (

           <MobileMenu categories={categories}></MobileMenu>

          ) : ( 
             <Menu categories={categories} isTabletOrSmaller={isTabletOrSmaller}></Menu>
                   ) 
                }
              </Grid>
            
          
          <Grid item container xs={2} md={2} order={3} alignItems='center' justifyContent="flex-end" wrap="nowrap">
          
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
          
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
