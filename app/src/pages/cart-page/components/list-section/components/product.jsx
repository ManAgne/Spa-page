import React from 'react';
import {
  Box, Button, Divider, OutlinedInput, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from '../../../../../components/image';

const Product = ({
  img,
  title,
  count,
  setCount,
  price,
  deleteItem,
}) => (
  <Box>
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box sx={{ display: 'flex', flexBasis: '60%', mx: 1 }}>
        <Image
          src={img}
          sx={{ width: '5vw' }}
        />
        <Box sx={{ alignSelf: 'center' }}>
          <Typography>{title}</Typography>
          <Typography>
            {price}
            €
          </Typography>
        </Box>
      </Box>
      <Box sx={{ alignSelf: 'center', flexBasis: '30%' }}>
        <Box sx={{ display: 'flex' }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
            }}
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
          >
            -
          </Button>
          <OutlinedInput
            variant="contained"
            size="small"
            inputProps={{
              style: {
                padding: 0, textAlign: 'center',
              },
              value: count,
              onChange: (e) => setCount(e.target.value),
            }}
            sx={{
              borderRadius: 0, width: 40, minWidth: 0, height: 40,
            }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              p: 0, height: 40, width: 40, minWidth: 0, borderRadius: 0, boxShadow: 'none',
            }}
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button sx={{ padding: 0 }}>
            <DeleteForeverIcon sx={{ alignSelf: 'center', fontSize: '35px' }} onClick={deleteItem} />
          </Button>
        </Box>
      </Box>
      <Typography sx={{
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'right',
        flexBasis: '10%',
        mx: 1,
      }}
      >
        {`${price * count}`}
        {' '}
        €
      </Typography>
    </Box>
    <Divider sx={{ m: 1 }} />
  </Box>
);

export default Product;
