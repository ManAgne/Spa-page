import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { ProductCard } from './components';

const CosmeticsPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <Box sx={{ display: 'flex', py: 3 }}>
      {/* <Filter /> */}
      <Grid container spacing={3} sx={{ px: 5 }}>
        {products.map(({
          id,
          title,
          price,
          img,
        }) => (
          <Grid key={id} item xs={6} md={4} lg={3} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              id={id}
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
