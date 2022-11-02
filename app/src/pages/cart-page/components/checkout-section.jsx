import * as React from 'react';
import {
  Box, Button, Divider, Typography, Tooltip, useMediaQuery,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from '../../../components/image';
import useCart from '../../../hooks/useCart';

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`http://localhost:8000/products/${id}`);
  const item = await response.json();

  return {
    ...item,
    count,
  };
};

const fetchCartItems = async (cartItems) => {
  const items = await Promise.all(cartItems.map((item) => fetchItem(item)));

  return items;
};

const CheckoutSection = () => {
  const {
    cartItems: cartItemsData,
  } = useCart();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  const belowLgScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const subtotal = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);
  const minOrderForFreeDelivery = 100;
  const deliveryCharge = 15;
  const freeDelivery = 0;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white',
        height: 'min-content',
        m: 1,
        p: 3,
        borderRadius: 1,
      }}
      width={belowLgScreen ? '100%' : '25%'}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant={belowLgScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>Total</Typography>
        {subtotal < minOrderForFreeDelivery && subtotal !== 0 ? (
          <Typography variant={belowLgScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
            {`${subtotal + deliveryCharge}`}
            {' '}
            €
          </Typography>
        )
          : (
            <Typography variant={belowLgScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
              {`${subtotal + freeDelivery}`}
              {' '}
              €
            </Typography>
          )}
      </Box>
      <Divider sx={{ m: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant={belowLgScreen ? 'h7' : 'h6'}>Subtotal</Typography>
        <Typography variant={belowLgScreen ? 'h7' : 'h6'}>
          {subtotal}
          {' '}
          €
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant={belowLgScreen ? 'h7' : 'h6'}>
          Delivery
          <Tooltip title="Free delivery on orders 100€ and above">
            <InfoOutlinedIcon sx={{ fontSize: '15px' }} />
          </Tooltip>
        </Typography>
        {subtotal < minOrderForFreeDelivery && subtotal !== 0 ? (
          <Typography variant={belowLgScreen ? 'h7' : 'h6'}>
            {deliveryCharge}
            {' '}
            €
          </Typography>
        )
          : (
            <Typography variant={belowLgScreen ? 'h7' : 'h6'}>
              {freeDelivery}
              {' '}
              €
            </Typography>
          )}
      </Box>
      <Divider sx={{ m: 1 }} />
      <Button variant="contained" sx={{ my: 2 }}>CHECKOUT</Button>
      <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>WE ACCEPT : </Typography>
      <Image src="cc.png" sx={{ width: '15vw', objectFit: 'contain' }} />
    </Box>
  );
};

export default CheckoutSection;
