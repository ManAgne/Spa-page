import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Product from './components/product';

const ListSection = () => (
  <Box
    sx={{
      bgcolor: 'white',
      width: '60%',
      m: 1,
      p: 5,
      borderRadius: 1,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Product />
    <Typography variant="h6" sx={{ textAlign: 'right', fontWeight: 'bold' }}>Subtotal: 36 €</Typography>
  </Box>
);

export default ListSection;
