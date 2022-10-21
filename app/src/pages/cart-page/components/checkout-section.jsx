import * as React from 'react';
import {
  Box, Button, Divider, Typography, Tooltip,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from '../../../components/image';
import CartContext from '../../../contexts/cart-context';

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
  } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  const subtotal = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);
  const deliveryCharge = 5;
  const freeDelivery = 0;

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', bgcolor: 'white', width: '30%', height: 'min-content', m: 1, p: 3, borderRadius: 1,
    }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Total</Typography>
        {subtotal < 50 && subtotal !== 0 ? (
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {`${subtotal + deliveryCharge}`}
            {' '}
            €
          </Typography>
        )
          : (
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {`${subtotal + freeDelivery}`}
              {' '}
              €
            </Typography>
          )}
      </Box>
      <Divider sx={{ m: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Subtotal</Typography>
        <Typography variant="h6">
          {subtotal}
          {' '}
          €
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Delivery
          <Tooltip title="Free delivery on orders 50€ and above">
            <InfoOutlinedIcon sx={{ fontSize: '15px' }} />
          </Tooltip>
        </Typography>
        {subtotal < 50 && subtotal !== 0 ? (
          <Typography variant="h6">
            {deliveryCharge}
            {' '}
            €
          </Typography>
        )
          : (
            <Typography variant="h6">
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
