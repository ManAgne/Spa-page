import * as React from 'react';
import {
  Box, useMediaQuery,
} from '@mui/material';
import { BackgroundImage, PageTitle } from '../../components';
import TreatmentCard from './components/treatment-card';

const TreatmentsPage = () => {
  const belowSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mt: 5,
            gap: 3,
          }}
          flexDirection={belowSmScreen ? 'column' : 'row'}
        >
          <TreatmentCard
            to="/treatments/massages"
            image="massage.jpg"
            alt="massages"
            title="Massages"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident labore eum iste, quam suscipit voluptatum sapiente
            culpa odio autem pariatur minima, nobis cupiditate soluta
            cumque rerum doloremque iure quia ducimus.

          </TreatmentCard>
          <TreatmentCard
            to="/treatments/facial"
            image="facial.jpg"
            alt="facial"
            title="Facial treatments"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident labore eum iste, quam suscipit voluptatum sapiente
            culpa odio autem pariatur minima, nobis cupiditate soluta
            cumque rerum doloremque iure quia ducimus.

          </TreatmentCard>
          <TreatmentCard
            to="/treatments/rituals"
            image="ritual.jpg"
            alt="rituals"
            title="Spa rituals"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident labore eum iste, quam suscipit voluptatum sapiente
            culpa odio autem pariatur minima, nobis cupiditate soluta
            cumque rerum doloremque iure quia ducimus.

          </TreatmentCard>

        </Box>
      </Box>
    </Box>
  );
};

export default TreatmentsPage;
