import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  MenuItem,
} from '@mui/material';
import BackgroundImage from '../../components/background-image';
import PageTitle from '../../components/page-title';

const procedures = [
  {
    value: 'thai massage',
    label: 'thai massage',
  },
];

const OrderPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [procedure, setProcedure] = React.useState('');

  return (
    <Box sx={{ pt: 7, display: 'flex', flexDirection: 'column' }}>
      <BackgroundImage />
      <PageTitle>Online Reservation</PageTitle>
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 3,
          width: 400,
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
