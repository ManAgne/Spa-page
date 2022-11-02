import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  styled,
  useMediaQuery,
} from '@mui/material';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import BackgroundImage from '../../components/background-image';

const Link = styled(RouterLink)({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
});

const HomePage = () => {
  const belowMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex' }}>
      <BackgroundImage />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        zIndex: 1,
      }}
      >
        <Typography
          component="h1"
          variant={belowMdScreen ? 'h3' : 'h1'}
          sx={{
            color: 'white',
            textAlign: 'center',
            my: '30px',
            textShadow: '2px 2px 2px #21313e',
            letterSpacing: '15px',
          }}
        >
          Lotus
          {belowMdScreen ? ' ' : <SpaTwoToneIcon sx={{ fontSize: '60px', mr: 3, ml: 1 }} />}
          Spa
        </Typography>
        <Typography
          component="p"
          fontSize={belowMdScreen ? '13px' : '15px'}
          sx={{
            color: 'white',
            width: '80vw',
            textAlign: 'justify',
            textShadow: '2px 2px 2px #21313e',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos ratione
          libero velit nostrum laborum fugiat! Impeditat tempore dolore repellat
          excepturi aliquam quisquam,possimus veritatis doloremque, minima maxime,
          consecteturcumque. Lorem ipsum dolor sit amet consectetur adipisicingelit.
          Aliquam id assumenda cupiditate? Totam suscipitconsequuntur debitis, sed eligendi
          explicabo error.
        </Typography>
        <Box
          marginTop={belowMdScreen ? '30px' : '70px'}
          sx={{
            display: 'flex', alignSelf: 'flex-end', mx: '10vw', gap: '20px',
          }}
        >
          <Link to="/treatments">
            <Card sx={{ maxWidth: 300, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="img-treatments.jpg"
                  alt="treatments"
                  sx={{ objectFit: 'contain', mt: -2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant={belowMdScreen ? 'h6' : 'h5'} component="div">
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
          <Link to="/cosmetics">
            <Card sx={{ maxWidth: 300, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="img-cosmetics.jpg"
                  alt="cosmetics"
                  sx={{ objectFit: 'contain', mt: -2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant={belowMdScreen ? 'h6' : 'h5'} component="div">
                    Cosmetics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae, dolor. Lorem ipsum dolor sit amet.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default HomePage;
