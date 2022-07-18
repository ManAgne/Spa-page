import * as React from 'react'
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Box component='img' src='bg-image.jpg' sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', objectFit: 'cover' }} />
    </Box>
  )
}

export default HomePage