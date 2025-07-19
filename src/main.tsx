import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import '../src/styles/global.css';
import { ProductProvider } from './components/product/view-context/ProductProvider';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store= {store}>
    {/* add ProductProvider for React context purpose */}
      <ProductProvider> 
      <App />
      </ProductProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
