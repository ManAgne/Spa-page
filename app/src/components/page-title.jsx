import React from 'react';
import { Typography } from '@mui/material';

const PageTitle = ({ children }) => (
  <Typography
    component="h1"
    variant="h3"
    align="center"
    sx={{
      color: 'white', my: '20px', textShadow: '2px 2px 2px #21313e', zIndex: 1,
    }}
  >
    {children}
  </Typography>
);

export default PageTitle;
