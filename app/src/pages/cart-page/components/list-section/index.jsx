import * as React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Product from './components/product';
import useCart from '../../../../hooks/useCart';

const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`${domain}/products/${id}`);
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

const ListSection = () => {
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
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

  return (
    <Box
      sx={{
        bgcolor: 'white',
        m: 1,
        p: 3,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      width={belowLgScreen ? '100%' : '75%'}
      maxHeight={belowLgScreen ? '200px' : '400px'}
    >
      <Box sx={{ overflow: 'auto' }}>
        {cartItems.map(({
          id,
          img,
          title,
          count,
          price,
        }) => (
          <Product
            key={id}
            img={img}
            title={title}
            count={count}
            setCount={(newCount) => addToCart({ id, count: newCount })}
            price={price}
            deleteItem={() => deleteItem(id)}
          />
        ))}
      </Box>
      <Typography variant={belowLgScreen ? 'h7' : 'h6'} sx={{ textAlign: 'right', fontWeight: 'bold' }}>
        Subtotal:
        {' '}
        {subtotal}
        {' '}
        €
      </Typography>
    </Box>
  );
};

export default ListSection;
