import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Layout from './layaout/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import RegistrationForm from './auth/Registration';
import LoginForm from './auth/Login';
import UserEdit from './auth/UserEdit';
//import {RequireAuth} from './auth/RequireAuth';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


function App() {

const isAuth = useSelector(state => state.auth.isAuth)

  return (
   <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/category/:category' element={<Products/>}/>
            <Route path='/signup' element={<RegistrationForm/>}/>
            <Route path='/login' element={<LoginForm/>}></Route>
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
