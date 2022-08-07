import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { CheckoutSection, ListSection } from './components';

const CartPage = () => (
  <Box sx={{
    pt: 7, mx: 5, display: 'flex', flexDirection: 'column',
  }}
  >
    <Box
      component="img"
      src="bg-image.jpg"
      sx={{
        position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0,
      }}
    />
    <Typography
      component="h1"
      variant="h3"
      align="center"
      sx={{
        color: 'white', my: '20px', textShadow: '2px 2px 2px #21313e', zIndex: 1,
      }}
    >
      Your Shopping Bag
    </Typography>
    <Box sx={{ display: 'flex', zIndex: 1 }}>
      <ListSection />
      <CheckoutSection />
    </Box>

  </Box>
);
export default CartPage;
