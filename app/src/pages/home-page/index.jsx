import * as React from 'react'
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box component='img' src='bg-image.jpg' sx={{ position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0}} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', zIndex: 1 }}>
        <Typography component='h1' variant='h1' sx={{ color: 'white', textAlign: 'center', my: '80px'}}>Cloud 9 Spa</Typography>
        <Box>afaf</Box>
      </Box>
    </Box>
  )
}

export default HomePage