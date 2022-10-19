import * as React from 'react';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import Image from '../../../components/image';

const CheckoutSection = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', bgcolor: 'white', width: '30%', height: 'min-content', m: 1, p: 3, borderRadius: 1,
  }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Total</Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>41 €</Typography>
    </Box>
    <Divider sx={{ m: 1 }} />
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Subtotal</Typography>
      <Typography variant="h6">36 €</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Delivery</Typography>
      <Typography variant="h6">5 €</Typography>
    </Box>
    <Divider sx={{ m: 1 }} />
    <Button variant="contained" sx={{ my: 2 }}>CHECKOUT</Button>
    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>WE ACCEPT : </Typography>
    <Image src="cc.png" sx={{ width: '15vw', objectFit: 'contain' }} />
  </Box>
);

export default CheckoutSection;
