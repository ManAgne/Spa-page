import * as React from 'react';
import {
  Box, Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import { BackgroundImage, PageTitle } from '../components';
import { Link } from '../components/navbar/components';

const TreatmentsPage = () => (
  <Box sx={{ pt: 3, display: 'flex' }}>
    <BackgroundImage />
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      zIndex: 1,
    }}
    >
      <PageTitle>Treatments</PageTitle>
      <Box sx={{ display: 'flex' }}>
        <Link to="/treatments">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="massage.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Treatments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est debitis laudantium voluptatibus natus voluptatem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/treatments">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="spa-treatment.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Treatments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est debitis laudantium voluptatibus natus voluptatem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/treatments">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="couple.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Treatments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est debitis laudantium voluptatibus natus voluptatem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Box>
    </Box>
  </Box>
);

export default TreatmentsPage;
