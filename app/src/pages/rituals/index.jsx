import * as React from 'react';
import {
  Box,
  Card,
} from '@mui/material';
import { PageTitle, TreatmentsAccordion } from '../../components';

const RitualsPage = () => {
  const [treatments, setTreatments] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:8000/services')
      .then((res) => res.json())
      .then((fetchedTreatments) => setTreatments(fetchedTreatments));
  }, []);

  const rituals = treatments.filter((treatment) => treatment.category === 'ritual');
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
      <PageTitle>Spa Rituals</PageTitle>
      <Card sx={{
        display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center', maxWidth: '1000px', p: 5, zIndex: 1,
      }}
      >
        {rituals.map(({
          id,
          title,
          description,
          duration,
          price,
        }) => (
          <TreatmentsAccordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
            title={title}
            duration={duration}
            price={price}
            description={description}
          />
        ))}
      </Card>
    </Box>
  );
};

export default RitualsPage;
