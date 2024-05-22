import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { fetchUserAuth } from './features/authSlice';
import Layout from './layaout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import RegistrationForm from './auth/Registration';
import LoginForm from './auth/Login';
import UserEdit from './pages/UserEdit';
import AdminProductsPanel from './pages/AdminProductsPanel';
import Payment from './pages/Payment';
import Product from './pages/Product';
import CategoryPanel from './pages/CategoryPanel';

function App() {
  const dispatch = useDispatch()

  //Check if the user is auth to allow some features, I needed this for globally/
  useEffect(() => { 
    dispatch(fetchUserAuth())
  }, []);
  
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/category/:category' element={<Products />} />
            <Route path='/product/:id/:productname' element={<Product />} />
            <Route path='/editproducts' element={<AdminProductsPanel />} /> 
            <Route path='/editcategories' element={<CategoryPanel />} /> 
            <Route path='/payment' element={<Payment/>} /> 
           {/*Route for registration form, redirect to home if already authenticated */}
            <Route path='/signup' element={!isAuth ? (
              <RegistrationForm />
            ) : (
              <Navigate to="/" replace />
            )} />
            <Route path='/login' element={!isAuth ? (
              <LoginForm />
            ) : (
              <Navigate to="/" replace />
            )}></Route>
            {/*Route for user edit, redirect to login if not authenticated */}
            <Route path='/edituser' element={
              isAuth ? (
                <UserEdit />
              ) : (
                <Navigate to='/login' replace />
              )
            } />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>  
  );
};

export default App;
