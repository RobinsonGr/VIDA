import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Layout from './layaout/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import RegistrationForm from './auth/Registration';

function App() {


 /*
It must have

Products
Categories

Error page

Pages
Login
Log up

 */
  return (
   <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/category/:category' element={<Products/>}/>
            <Route path='/singup' element={<RegistrationForm/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>  
  );
};

export default App
