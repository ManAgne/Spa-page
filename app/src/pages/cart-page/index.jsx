import * as React from 'react';
import { Box } from '@mui/material';
// import CartContext from '../../contexts/cart-context';
import { ListSection, CheckoutSection } from './components';
import PageTitle from '../../components/page-title';

// const { cartItems } = React.useContext(CartContext);
const CartPage = () => (
  <Box sx={{
    pt: 3, mx: 5, display: 'flex', flexDirection: 'column',
  }}
  >
    <Box
      component="img"
      src="bg-image.jpg"
      sx={{
        position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0,
      }}
    />
    <PageTitle>Your Shopping Bag</PageTitle>
    <Box sx={{ display: 'flex', zIndex: 1 }}>
      <ListSection />
      <CheckoutSection />
    </Box>
  </Box>
);
export default CartPage;
