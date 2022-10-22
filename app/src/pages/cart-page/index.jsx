import * as React from 'react';
import { Box } from '@mui/material';
import { ListSection, CheckoutSection } from './components';
import PageTitle from '../../components/page-title';
import BackgroundImage from '../../components/background-image';

const CartPage = () => (
  <Box sx={{
    pt: 3, mx: 5, display: 'flex', flexDirection: 'column',
  }}
  >
    <BackgroundImage />
    <PageTitle>Your Shopping Bag</PageTitle>
    <Box sx={{ display: 'flex', zIndex: 1 }}>
      <ListSection />
      <CheckoutSection />
    </Box>
  </Box>
);
export default CartPage;
