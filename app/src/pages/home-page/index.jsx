import * as React from 'react'
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box component='img' src='bg-image.jpg' sx={{ position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0}} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', zIndex: 1 }}>
        <Typography component='h1' variant='h1' sx={{ color: 'white', textAlign: 'center', my: '30px'}}>Cloud 9 Spa</Typography>
        <Box component='p' sx={{ color: 'white', width: '70vw', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione libero velit nostrum laborum fugiat! Impedit at tempore dolore repellat excepturi aliquam quisquam, possimus veritatis doloremque, minima maxime, consectetur cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id assumenda cupiditate? Totam suscipit consequuntur debitis, sed eligendi explicabo error.</Box>
      </Box>
    </Box>
  )
}

export default HomePage