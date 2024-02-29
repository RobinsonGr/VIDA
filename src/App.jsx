import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Layout from './layaout/Layout';
import { ThemeProvider } from '@emotion/react';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/category/:category' element={<Products/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
