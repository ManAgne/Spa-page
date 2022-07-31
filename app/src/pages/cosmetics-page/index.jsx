import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ProductCard from './components/product-card';
import CartContext from '../../contexts/cart-context';

const CosmeticsPage = () => {
  const cartContext = React.useContext(CartContext);
  const [products, setProducts] = React.useState([]);

  console.log('CosmeticsPage, cartContextValue:', cartContext);

  React.useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {products.map(({
          id,
          title,
          price,
          img,
        }) => (
          <Grid item xs={6} md={4} lg={3} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              key={id}
              title={title}
              price={price}
              img={img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CosmeticsPage;
