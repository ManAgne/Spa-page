import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Typography,
  Button,
  MenuItem,
} from '@mui/material';
import CartContext from '../../contexts/cart-context';

const procedures = [
  {
    value: 'thai massage',
    label: 'thai massage',
  },
];

const OrderPage = () => {
  const cartContext = React.useContext(CartContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [procedure, setProcedure] = React.useState('');

  console.log('OrderPage, cartContextValue:', cartContext);

  return (
    <Box sx={{ pt: 7, display: 'flex', flexDirection: 'column' }}>
      <Box
        component="img"
        src="bg-image.jpg"
        sx={{
          position: 'absolute', top: '80px', left: 0, width: '100%', height: '100vh', objectFit: 'cover', zIndex: 0,
        }}
      />
      <Typography
        component="h1"
        variant="h3"
        align="center"
        sx={{
          color: 'white', my: '20px', textShadow: '2px 2px 2px #21313e', zIndex: 1,
        }}
      >
        Online Reservation
      </Typography>
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          bgcolor: 'white',
          zIndex: 1,
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <TextField
            name="procedure"
            select
            label="Choose a procedure"
            variant="filled"
            onChange={(event) => setProcedure(event.target.value)}
            value={procedure}
            fullWidth
          >
            {procedures.map(
              ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
            )}
          </TextField>
          <TextField
            name="name"
            label="Name"
            variant="filled"
            fullWidth
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />

          <TextField
            name="phone number"
            type="number"
            label="Phone number"
            variant="filled"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            fullWidth
          />

          <Button type="submit" variant="contained" size="large">Confirm reservation</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OrderPage;
