import * as React from 'react';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import Image from '../../../components/image';

const CheckoutSection = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', bgcolor: 'white', width: '40%', m: 1, p: 5, borderRadius: 1,
  }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h4">Total</Typography>
      <Typography variant="h4">55 €</Typography>
    </Box>
    <Divider sx={{ m: 1 }} />
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Subtotal</Typography>
      <Typography variant="h6">50 €</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Delivery</Typography>
      <Typography variant="h6">5 €</Typography>
    </Box>
    <Divider sx={{ m: 1 }} />
    <Button variant="contained" sx={{ my: 2 }}>CHECKOUT</Button>
    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>WE ACCEPT : </Typography>
    <Image src="cc.png" sx={{ width: '15vw' }} />
  </Box>
);

export default CheckoutSection;
