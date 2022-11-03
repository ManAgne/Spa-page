import React from 'react';
import {
  Box, Button, Divider, OutlinedInput, Typography, useMediaQuery,
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
}) => {
  const increase = 1;
  const decrease = -1;
  const belowMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const belowSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box sx={{ display: 'flex', flexBasis: '70%', mx: 1 }}>
          <Image
            src={img}
            sx={belowSmScreen ? { width: '0vw' } : { width: '5vw' }}
          />
          <Box sx={{ alignSelf: 'center' }}>
            <Typography sx={belowMdScreen
              ? { fontSize: 12 }
              : { fontSize: 15 }}
            >
              {title}

            </Typography>
            <Typography sx={belowMdScreen
              ? { fontSize: 12 }
              : { fontSize: 15 }}
            >
              {price}
              €
            </Typography>
          </Box>
        </Box>
        <Box sx={{ alignSelf: 'center', flexBasis: '20%' }}>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(decrease)}
              disabled={count <= 1}
            >
              -
            </Button>
            <OutlinedInput
              variant="contained"
              inputProps={{
                style: {
                  padding: 0, textAlign: 'center',
                },
                value: count,
                onChange: (e) => setCount(e.target.value),
              }}
              sx={{
                borderRadius: 0, width: 30, minWidth: 0, height: 30,
              }}
            />
            <Button
              variant="outlined"
              sx={{
                p: 0, height: 30, width: 30, minWidth: 0, borderRadius: 0, boxShadow: 'none',
              }}
              onClick={() => setCount(increase)}
            >
              +
            </Button>
            <Button sx={{ padding: 0 }} display={belowSmScreen && 'none'}>
              <DeleteForeverIcon sx={{ alignSelf: 'center', fontSize: '30px' }} onClick={deleteItem} />
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'right',
            mx: 1,
          }}
          fontSize={belowMdScreen ? 10 : 18}
          flexBasis={belowMdScreen ? '15%' : '10%'}
        >
          {`${price * count}`}
          {' '}
          €
        </Typography>
      </Box>
      <Divider sx={{ m: 1 }} />
    </Box>
  );
};

export default Product;
