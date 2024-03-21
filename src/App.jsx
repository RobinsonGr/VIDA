import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Layout from './layaout/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import RegistrationForm from './auth/Registration';
import LoginForm from './auth/Login';
import UserEdit from './pages/UserEdit';
//import {RequireAuth} from './auth/RequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { fetchUserAuth } from './features/authSlice';
import EditCategories from './components/editCategories.jsx';


function App() {
const dispatch = useDispatch()

useEffect(() => { 
  dispatch(fetchUserAuth())
}, [])
const isAuth = useSelector(state => state.auth.isAuth);

//I have store the auth in redux thunk, it will retrieve the auth from the server, 
//I dont know how to retrieve auth every time the user change the page or goes to and 
//protected url

  return (
   <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/category/:category' element={<Products/>}/>
            <Route path='/editcategories' element={<EditCategories/> /*<Products/>*/ }/>
            <Route path='/signup' element={!isAuth ? (
              <RegistrationForm/>
            ) : (
              <Navigate to="/" replace/>
            )}/>
            <Route path='/login' element={!isAuth ? (
              <LoginForm/>
            ) : (
              <Navigate to="/" replace/>
            )}></Route>
            <Route path='/edituser' element={
                  isAuth ? (
                    <UserEdit />
                  ) : (
                    <Navigate to='/login' replace />
                  )
                }/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>  
  );
};

export default App
