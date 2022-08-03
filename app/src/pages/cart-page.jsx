import * as React from 'react';
import { Box } from '@mui/material';
import CartContext from '../contexts/cart-context';

const CartPage = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <Box component="pre" sx={{ mt: 10 }}>{JSON.stringify(cartItems, null, 4)}</Box>
  );
};

export default CartPage;
