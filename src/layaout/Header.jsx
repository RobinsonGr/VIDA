import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartButton from '../components/cart/cartButton';
import ProfileMenu from '../components/profileMenu';
import { useSelector } from 'react-redux';
import { getCategoriesAPI } from '../api';

const Logo = 'https://i.ibb.co/QPGLK94/ECO.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile ? (
            <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
              <img src={Logo} alt="Logo" style={{ height: '40px' }} />
            </Box>
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
          <Menu anchorEl={anchorEl} open={isOpen} onClose={handleCloseMenu}>
            {categories.slice(4).map((route, index) => (
              <MenuItem key={index} onClick={handleCloseMenu}>
                <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  {route.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
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
            <CartButton />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
