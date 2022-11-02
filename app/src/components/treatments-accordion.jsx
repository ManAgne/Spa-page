import * as React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TreatmentsAccordion = ({
  key,
  expanded,
  onChange,
  title,
  duration,
  price,
  description,
}) => (

  <Accordion
    key={key}
    expanded={expanded}
    onChange={onChange}
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
);

export default TreatmentsAccordion;
