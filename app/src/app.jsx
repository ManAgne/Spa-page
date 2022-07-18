import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from '../src/components/navbar';
import HomePage from './pages/home-page';
import TreatmentsPage from './pages/treatments-page';
import CosmeticsPage from './pages/cosmetics-page';
import CartPage from './pages/cart-page';
import ErrorPage from './pages/error-page';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments-page" element={<TreatmentsPage />} />
        <Route path="/cosmetics-page" element={<CosmeticsPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
