import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/home-page';
import TreatmentsPage from './pages/treatments-page';
import CosmeticsPage from './pages/cosmetics-page';
import CartPage from './pages/cart-page';
import WishlistPage from './pages/wishlist-page';
import OnlineReservationPage from './pages/online-reservation-page';
import ErrorPage from './pages/error-page';
import CartContext from './contexts/cart-context';

const App = () => (
  <BrowserRouter>
    <CartContext.Provider value={6}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/cosmetics" element={<CosmeticsPage />} />
        <Route path="/reservation" element={<OnlineReservationPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </CartContext.Provider>
  </BrowserRouter>
);

export default App;
