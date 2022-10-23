import * as React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PageTitle } from '../components';
// const [treatments, setTreatments] = React.useState([]);

// React.useEffect(() => {
//   fetch('http://localhost:8000/treatments')
//     .then((res) => res.json())
//     .then((fetchedTreatments) => setTreatments(fetchedTreatments));
// }, []);

/* {treatments.filter(treatment => treatment.title === 'rituals') => ( */

const RitualsPage = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignContent: 'center', pt: 3,
  }}
  >
    <Box
      component="img"
      src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1793&q=80.jpg"
      sx={{
        position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0,
      }}
    />
    <PageTitle>Spa Rituals</PageTitle>
    <Card sx={{
      display: 'flex', justifyContent: 'center', alignSelf: 'center', maxWidth: '1500px', p: 5, zIndex: 1,
    }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>description</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  </Box>
);

export default RitualsPage;
