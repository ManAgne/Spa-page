import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const ProductCard = ({
  id,
  title,
  price,
  img,
  images,
  liked,
  updateProduct,
}) => {
  const [displayedImg, setDisplayedImg] = React.useState(img);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const count = 1;

  return (
    <Card sx={{
      height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'relative',
    }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={() => updateProduct({ id, liked: !liked })}
      >
        {liked ? <FavoriteRoundedIcon color="primary" /> : <FavoriteBorderRoundedIcon color="primary" />}
      </IconButton>
      <CardMedia
        component="img"
        width="100%"
        image={displayedImg}
        alt={title}
        onMouseEnter={() => setDisplayedImg(images[1])}
        onMouseOut={() => setDisplayedImg(img)}
        onClick={() => navigate(`/product/${id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', minHeight: '64px' }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary" textAlign="center">
          {price}
          {' '}
          €
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small" onClick={() => navigate(`/product/${id}`)}>More</Button>
        <Button size="small" onClick={() => addToCart({ id, count })}>Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
