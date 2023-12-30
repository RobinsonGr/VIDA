import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './pages/products';
import ErrorPage from './pages/ErrorPage';
import Layout from './layaout/Layout';

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
          <Route path='/products' element={<Products/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
