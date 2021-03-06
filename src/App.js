import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import pages
import Home from './pages/Home';
import Error from './pages/Error';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';

//import components
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    
<BrowserRouter>
<Header/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
   
  );
}
export default App;
