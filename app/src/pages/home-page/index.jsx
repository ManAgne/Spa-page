import * as React from 'react'
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box component='img' src='bg-image.jpg' sx={{ position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0}} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', zIndex: 1 }}>
        <Typography component='h1' variant='h1' sx={{ color: 'white', textAlign: 'center', my: '30px'}}>Lotus Spa</Typography>
        <Typography component='p' sx={{ color: 'white', width: '80vw', textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos ratione libero velit nostrum laborum fugiat! Impeditat tempore dolore repellat excepturi aliquam quisquam,possimus veritatis doloremque, minima maxime, consecteturcumque. Lorem ipsum dolor sit amet consectetur adipisicingelit. Aliquam id assumenda cupiditate? Totam suscipitconsequuntur debitis, sed eligendi explicabo error.
        </Typography>
        <Box sx={{ display: 'flex', alignSelf: 'flex-end', mx: '10vw', mt: '80px', gap: '20px' }}>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="img-treatments.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Treatments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis laudantium voluptatibus natus voluptatem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="img-cosmetics.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cosmetics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, dolor.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage