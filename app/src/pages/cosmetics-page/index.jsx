import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { Filter, ProductCard } from './components';

const updateProduct = async ({ id, ...updateProps }) => {
  const response = await fetch(`http://localhost:8000/products/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Context-type': 'application/json',
    },
    body: JSON.strigify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const fetchAllProducts = async () => {
  const response = await fetch('http://localhost:8000/products');
  const products = await response.json();

  return products;
};

const CosmeticsPage = () => {
  const [products, setProducts] = React.useState([]);

  const handleFetchProducts = async () => {
    const fetchedProducts = await fetchAllProducts();
    setProducts(fetchedProducts);
  };

  const handleUpdateProduct = async (props) => {
    await updateProduct(props);
    await handleFetchProducts();
  };

  React.useEffect(() => { handleFetchProducts(); }, []);

  return (
    <Box sx={{ display: 'flex', py: 3 }}>
      <Filter />
      <Grid container spacing={3} sx={{ px: 5 }}>
        {products.map(({
          id,
          title,
          price,
          img,
          liked,
        }) => (
          <Grid key={id} item xs={6} md={4} lg={3} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              id={id}
              title={title}
              price={price}
              img={img}
              liked={liked}
              updateProduct={handleUpdateProduct}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CosmeticsPage;
