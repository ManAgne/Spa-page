import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({
  title,
  description,
  img,
}) => (
  <Card sx={{
    height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
  }}
  >
    <CardMedia
      component="img"
      width="100%"
      image={img}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button size="small">More</Button>
      <Button size="small">Add to card</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
