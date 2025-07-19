import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../home/Home'
import Contact from '../contact/Contact';
import Header from '../header/Header';
import About from '../about/About';
import ProductView from '../product/view/ProductView';
import ProductList from '../product/list/ProductList';
import { ProductAdd } from '../product/add/ProductAdd';
import ProductViewUsingContext from '../product/view-context/ProductViewUsingContext';
import ProductViewProps from '../product/view-props/ProductViewProps';
import ProductListStore from '../product/list-store/ProductListStore';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/product-add" element={ <ProductAdd />} />
        <Route path="/product-list" element={ <ProductList />} />
        <Route path="/product-list-store" element={ <ProductListStore />} />
        <Route path='/product/:id' element={<ProductView />} />
        {/* React context way passing data */}
        <Route path='/product-view-context' element={<ProductViewUsingContext />} />
        {/* // props drilling way passing data */}
        <Route path="/product-view-props" element={<ProductViewProps />} />
      </Routes>
    </>
  );
}

export default App
