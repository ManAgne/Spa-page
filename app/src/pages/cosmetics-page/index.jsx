import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../services/product-service';
import wait from '../../helpers/wait';
import { ProductCard, Filter } from './components';

const CosmeticsPage = () => {
  const [products, setProducts] = React.useState([]);
  const [searchParams] = useSearchParams();

  const handleFetchProducts = React.useCallback(async () => {
    const [fetchedProducts] = await Promise.all([
      ProductService.fetchAll(searchParams.toString()),
      wait(500),
    ]);
    setProducts(fetchedProducts);
  }, [searchParams]);

  const handleUpdateProduct = async (props) => {
    await ProductService.update(props);
    await handleFetchProducts();
  };

  React.useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  return (
    <Box sx={{ display: 'flex', py: 3 }}>
      <Filter />
      <Grid container spacing={3} sx={{ px: 5 }}>
        {products.map(({
          id,
          title,
          price,
          images,
          liked,
        }) => (
          <Grid key={id} item xs={6} md={4} lg={3} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              id={id}
              title={title}
              price={price}
              images={images}
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
