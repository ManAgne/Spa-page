import * as React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import NavBar from './components/navbar';
import { CartProvider } from './contexts/cart-context';
import PageRoutes from './routes/page-routes';

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <NavBar />
      <PageRoutes />
    </CartProvider>
  </BrowserRouter>
);

export default App;
