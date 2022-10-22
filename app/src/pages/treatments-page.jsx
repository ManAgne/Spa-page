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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui numquam
                  quasi eveniet a velit voluptatibus adipisci fugiat omnis, sit, cupiditate,
                  neque autem soluta ut veritatis. Deserunt expedita dolor, sapiente, dolore
                  placeat quidem ab quae, sed reprehenderit alias reiciendis cum magni corrupti
                  praesentium labore aperiam quo eveniet voluptatibus ea. Magni.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam
                  culpa ab accusamus cumque ducimus tempora quis facilis minus. Commodi quisquam
                  quibusdam reprehenderit beatae eos eligendi nulla? Eum tempore rem itaque
                  voluptas ea modi. Alias, voluptate blanditiis ea doloribus corrupti molestiae
                  ullam obcaecati praesentium totam dolor fugiat quaerat quas sequi!
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem recusandae
                  officia impedit iure, rem a itaque animi quo laborum, ab veniam eveniet, vero
                  quaerat delectus deserunt explicabo tenetur excepturi nulla blanditiis. Maiores,
                  aspernatur! Sapiente, temporibus rerum! Esse aliquam in, rerum nesciunt veniam
                  quae laborum, sequi perspiciatis accusamus cumque laudantium fuga?
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
