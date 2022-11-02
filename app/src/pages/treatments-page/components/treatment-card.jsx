import {
  Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import { Link } from '../../../components/navbar/components';

const TreatmentCard = ({
  to,
  image,
  alt,
  title,
  children,
}) => {
  const belowMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Link to={to}>
      <Card sx={{ maxWidth: 350, height: '101%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={belowMdScreen ? '100' : '170'}
            image={image}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" display={belowMdScreen && 'none'}>
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default TreatmentCard;
