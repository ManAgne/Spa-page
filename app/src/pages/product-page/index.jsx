import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Alert,
} from '@mui/material';
import ProductService from '../../services/product-service';
import Content from './content';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedProduct = await ProductService.fetchById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        setErrorMsg(`Product with id '${productId}' was not found.`);
      }
    })();
  }, [productId]);

  return (
    <Container>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {product && <Content product={product} />}
    </Container>
  );
};

export default ProductPage;
