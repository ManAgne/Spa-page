import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Typography,
  Button,
  MenuItem,
} from '@mui/material';

const services = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const OrderPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [service, setService] = React.useState('');

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
          opacity: '2',
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
            name="service"
            select
            label="Choose service"
            variant="filled"
            onChange={(event) => setService(event.target.value)}
            value={service}
            fullWidth
          >
            {services.map(
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
