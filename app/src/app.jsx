import * as React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import NavBar from './components/navbar';
import { CartProvider } from './contexts/cart-context';
import PageRoutes from './routes/page-routes';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <PageRoutes />
      </CartProvider>
    </BrowserRouter>
  </LocalizationProvider>
);

export default App;
