import React from 'react';
import {
  Box, Button, Divider, OutlinedInput, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Image from '../../../../../components/image';

const Product = () => {
  const [qty, setQty] = React.useState([1]);

  return (
    <Box>
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
              variant="outlined"
              size="small"
              sx={{
                p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
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
                  padding: 0, width: 40, minWidth: 0, textAlign: 'center',
                },
                value: qty,
              }}
              readOnly
              sx={{ borderRadius: 0 }}
            />
            <Button
              variant="outlined"
              size="small"
              sx={{
                p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setQty(qty + 1)}
            >
              +
            </Button>
            <DeleteForeverIcon sx={{ alignSelf: 'center', mx: 1, fontSize: '40px' }} />
          </Box>
        </Box>
        <Typography sx={{ alignSelf: 'center' }}>36 €</Typography>
      </Box>
      <Divider sx={{ m: 1 }} />
    </Box>
  );
};

export default Product;
