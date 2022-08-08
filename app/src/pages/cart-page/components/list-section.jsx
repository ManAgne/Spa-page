import * as React from 'react';
import {
  Box, Divider, OutlinedInput, Typography, Button,
} from '@mui/material';
import Image from '../../../components/image';

const ListSection = () => {
  const [qty, setQty] = React.useState([1]);

  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '60%',
        m: 1,
        p: 5,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Image
            src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12226503-1944858828507032.jpg"
            sx={{ width: '5vw' }}
          />
          <Box sx={{ alignSelf: 'center' }}>
            <Typography>Tri-Active™ Lift & Firm Moisturiser</Typography>
            <Typography>36 €</Typography>
          </Box>
        </Box>
        <Box sx={{ alignSelf: 'center' }}>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setQty(qty - 1)}
              disabled={qty <= 1}
            >
              -
            </Button>
            <OutlinedInput
              variant="contained"
              size="small"
              inputProps={{
                style: {
                  padding: 0, width: 30, minWidth: 0, textAlign: 'center',
                },
                value: qty,
              }}
              readOnly
              sx={{ borderRadius: 0 }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setQty(qty + 1)}
            >
              +
            </Button>
          </Box>
        </Box>
        <Box sx={{ alignSelf: 'center' }}>50 €</Box>
      </Box>
      <Divider sx={{ m: 1 }} />
      <Typography variant="h6" sx={{ textAlign: 'right' }}>Subtotal: 50 €</Typography>
    </Box>
  );
};

export default ListSection;
