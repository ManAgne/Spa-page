import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ListSection, CheckoutSection } from './components';
import PageTitle from '../../components/page-title';
import BackgroundImage from '../../components/background-image';
import useCart from '../../hooks/useCart';
import { Link } from '../../components/navbar/components';

const CartPage = () => {
  const { cartItemsCount } = useCart();

  return (
    <Box sx={{
      pt: 3, mx: 5, display: 'flex', flexDirection: 'column',
    }}
    >
      <BackgroundImage />
      <PageTitle>Your Shopping Bag</PageTitle>
      { cartItemsCount > 0
        ? (
          <Box sx={{ display: 'flex', zIndex: 1 }}>
            <ListSection />
            <CheckoutSection />
          </Box>
        )
        : (
          <Box sx={{ zIndex: 2 }}>
            <PageTitle>is empty :(</PageTitle>
            <Box sx={{
              display: 'flex', justifyContent: 'center', fontSize: '25px', my: 5,
            }}
            >
              <Link to="/cosmetics">Continue shopping</Link>
              <Typography sx={{ color: 'common.white', fontSize: '25px', mx: 2 }}>or</Typography>
              <Link to="/reservation">Book a treatment</Link>
            </Box>
          </Box>
        )}
    </Box>
  );
};
export default CartPage;
