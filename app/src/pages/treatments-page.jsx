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
      <PageTitle>Spa Treatments</PageTitle>
      <Box sx={{
        display: 'flex', justifyContent: 'center', width: '100%', mt: 5, gap: 3,
      }}
      >
        <Link to="/treatments">
          <Card sx={{ maxWidth: 350, height: '101%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="massage.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Massages
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  voluptates consectetur aliquid ipsum cumque dolor, qui doloremque
                  atque error a quae excepturi animi obcaecati culpa, quis accusamus
                  veniam adipisci dolorem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/treatments">
          <Card sx={{ maxWidth: 350, height: '101%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="facial.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Facial Treatments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cum dolor unde, error aliquam ratione iste. Necessitatibus
                  reiciendis quas, voluptatem saepe soluta cum libero in maxime
                  expedita, amet ipsa, ex laboriosam.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/treatments">
          <Card sx={{ maxWidth: 350, height: '101%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="ritual.jpg"
                alt="treatments"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spa Rituals
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
                  beatae veritatis perferendis ex debitis iure quod cupiditate!
                  Voluptate omnis molestiae laborum, aliquid aspernatur magnam,
                  dolores repudiandae dolor quisquam nobis deserunt!
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
