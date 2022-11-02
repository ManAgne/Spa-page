import { Box } from '@mui/material';
import React from 'react';

const BackgroundImage = () => (
  <Box
    component="img"
    src="bg-image.jpg"
    sx={{
      position: 'absolute',
      top: '80px',
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
    }}
  />
);

export default BackgroundImage;
