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

const MassagesPage = () => {
  const [treatments, setTreatments] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:8000/services')
      .then((res) => res.json())
      .then((fetchedTreatments) => setTreatments(fetchedTreatments));
  }, []);

  const massages = treatments.filter((tratment) => tratment.category === 'massage');
  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
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
      <PageTitle>Massages</PageTitle>
      <Card sx={{
        display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center', maxWidth: '1000px', p: 5, zIndex: 1,
      }}
      >
        {massages.map(({
          id,
          title,
          description,
          duration,
          price,
        }) => (

          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ display: 'flex ', justifyContent: 'space-between' }}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
              <Typography>
                {duration}
                {' '}
                /
                {' '}
                {price}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Card>
    </Box>
  );
};

export default MassagesPage;
