import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ProductService from '../../services/product-service';
import { ProductCard, Filter } from './components';

const CosmeticsPage = () => {
  const [products, setProducts] = React.useState([]);

  const handleFetchProducts = async () => {
    const fetchedProducts = await ProductService.fetchAll();
    setProducts(fetchedProducts);
  };

  const handleUpdateProduct = async (props) => {
    await ProductService.update(props);
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
