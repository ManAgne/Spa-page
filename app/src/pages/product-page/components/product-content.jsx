import * as React from 'react';
import {
  Box, Button, Card, OutlinedInput, Typography, useMediaQuery,
} from '@mui/material';
import useCart from '../../../hooks/useCart';
import Image from '../../../components/image';

const ProductContent = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const { addToCart } = useCart();
  const belowSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card
      sx={belowSmScreen ? {
        display: 'flex', flexDirection: 'column', p: 3, mt: 3,
      } : { display: 'flex', p: 3, mt: 3 }}
    >
      <Box>
        <Image src={product.img} />
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mx: 5,
      }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>{product.title}</Typography>
        <Typography variant="h7" sx={{ mb: 2, textAlign: 'justify' }}>{product.description}</Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {product.price}
          {' '}
          €
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
          <Typography variant="h6" sx={{ alignSelf: 'center' }}>Quantity: </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(count - 1)}
              disabled={count <= 1}
            >
              -
            </Button>
            <OutlinedInput
              variant="contained"
              size="small"
              inputProps={{
                style: {
                  padding: 0, textAlign: 'center',
                },
                value: count,
              }}
              sx={{
                borderRadius: 0, width: 120, minWidth: 0, height: 40, alignSelf: 'center',
              }}
            />
            <Button
              variant="outlined"
              size="small"
              sx={{
                p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </Box>
        </Box>
        <Button variant="contained" size="large" onClick={() => addToCart({ id: product.id, count })}>Add to cart</Button>
      </Box>
    </Card>
  );
};

export default ProductContent;
