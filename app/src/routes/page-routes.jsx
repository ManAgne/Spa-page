import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/cart-page';
import CosmeticsPage from '../pages/cosmetics-page';
import ErrorPage from '../pages/error-page';
import HomePage from '../pages/home-page';
import Login from '../pages/login-page';
import ProductPage from '../pages/product-page';
import Register from '../pages/register-page';
import TreatmentsPage from '../pages/treatments-page';
import WishlistPage from '../pages/wishlist-page';
import OnlineReservationPage from '../pages/online-reservation-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/treatments" element={<TreatmentsPage />} />
    <Route path="/cosmetics" element={<CosmeticsPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="/reservation" element={<OnlineReservationPage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default PageRoutes;
