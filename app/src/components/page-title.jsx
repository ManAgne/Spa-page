import React from 'react';
import { Typography, useMediaQuery } from '@mui/material';

const PageTitle = ({ children }) => {
  const belowMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Typography
      component="h1"
      variant={belowMdScreen ? 'h5' : 'h3'}
      align="center"
      sx={{
        color: 'white', my: '15px', textShadow: '2px 2px 2px #21313e', zIndex: 1,
      }}
    >
      {children}
    </Typography>
  );
};
export default PageTitle;
