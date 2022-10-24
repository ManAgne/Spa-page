import * as React from 'react';
import {
  Box, Button, OutlinedInput, Typography,
} from '@mui/material';
import useCart from '../../hooks/useCart';
import Image from '../../components/image';

const ProductContent = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const { addToCart } = useCart();

  return (
    <Box sx={{ display: 'flex', py: 3 }}>
      <Box>
        <Image src={product.img} />
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mx: 5,
      }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>{product.title}</Typography>
        <Typography variant="h6">{product.description}</Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {product.price}
          {' '}
          €
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <Button variant="contained" size="large" onClick={() => addToCart({ product.id, count })}>Add to cart</Button>
      </Box>
    </Box>
  );
};

export default ProductContent;
