import * as React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery,
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
}) => {
  const belowMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (

    <Accordion
      key={key}
      expanded={expanded}
      onChange={onChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ width: '30%', flexShrink: 0 }} fontSize={belowMdScreen && '12px'}>{title}</Typography>
        <Typography sx={{ ml: 1 }} fontSize={belowMdScreen && '12px'}>
          {duration}
          {' '}
          /
          {' '}
          {price}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography fontSize={belowMdScreen && '10px'}>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default TreatmentsAccordion;
