import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, ListItemText, Toolbar, IconButton, Menu, MenuList, MenuItem, Paper, Button, Box, useMediaQuery, Grid, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../components/cart/Cart';
import ProfileMenu from '../components/profileMenu';
import { useSelector } from 'react-redux';
import { getCategoriesAPI } from '../api';
import MobileMenu from '../components/header/MobileMenu';
import DesktopMenu from '../components/header/DesktopMenu';

const Logo = 'https://i.ibb.co/QPGLK94/ECO.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isTabletOrSmaller  = useMediaQuery('(max-width:899px)');
  const location = useLocation();
  const shouldApplyMarginBottom = !(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup');
  const theme = useTheme()



  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategoriesAPI();
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  return (
    <AppBar position="static" style={shouldApplyMarginBottom ? { marginBottom: '0' } : null} >
      <Toolbar> 
        <Grid container wrap="nowrap" alignItems="center" justifyContent={isTabletOrSmaller ? 'space-between' : 'flex-start'}
> 
          <Grid item xs={1} {...(isTabletOrSmaller ? { order: 2 } : {})} sx={{marginRight:'10px'}}>
            <Box>
              <img src={Logo} alt="Logo" style={{ height: '40px' }} />
            </Box>
          </Grid>
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
          <Grid item {...(isTabletOrSmaller ? { order: 1 } : {})} sx={{ display: 'flex', justifyContent: 'flex-start' }} xs={1} sm={1} md={8}>                  
          {isTabletOrSmaller ? (

           <MobileMenu categories={categories}></MobileMenu>

          ) : ( 
            <DesktopMenu categories={categories}></DesktopMenu>
                   ) 
                }
              </Grid>
            
          
          <Grid item container xs={2} md={3} order={3} alignItems='center' justifyContent="flex-end" wrap="nowrap">
          
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
