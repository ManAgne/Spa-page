import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Product from './components/product';
import CartContext from '../../../../contexts/cart-context';

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

const ListSection = () => {
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
  } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  const subtotal = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);

  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '60%',
        maxHeight: '400px',
        m: 1,
        p: 3,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
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
      <Typography variant="h6" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
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
