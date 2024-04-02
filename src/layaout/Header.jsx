import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategoriesAPI } from '../api';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useTheme, Button, Box, useMediaQuery, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CartButton from "../components/cart/cartButton";
import { useSelector } from "react-redux";
import ProfileMenu from "../components/profileMenu";
import { logOutAPI } from "../api";


const Logo = 'https://i.ibb.co/QPGLK94/ECO.png';

function Header() {
    const [categories, setCategories] = useState([]);
    const isAuth = useSelector(state => state.auth.isAuth);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const theme = useTheme();
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getCategoriesAPI();
           await  logOutAPI()
            setCategories(categories);
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
                        <>
                            <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                            {categories.slice(0, 4).map(route => (
                                <Button
                                    key={route.name}
                                    component={Link}
                                    to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}
                                    variant="text"
                                    color="inherit"
                                    sx={{ fontSize: '1rem' }}
                                >
                                    {route.name}
                                </Button>
                            ))}
                            {categories.length > 4 && (
                                <Button
                                    variant="text"
                                    color="inherit"
                                    onClick={handleOpenMenu}
                                >
                                    More
                                </Button>
                            )}
                            <Menu
                                anchorEl={anchorEl}
                                open={isOpen}
                                onClose={handleCloseMenu}
                            >
                                {categories.slice(4).map(route => (
                                    <MenuItem onClick={handleCloseMenu} key={route.name}>
                                        <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>{route.name}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
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
                       <ProfileMenu></ProfileMenu>
                    )}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        sx={{ml: '5px'}}
                    >
                        <CartButton />
                    </IconButton>
                 
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header