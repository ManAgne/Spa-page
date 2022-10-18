import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  MenuItem,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import BackgroundImage from '../../components/background-image';
import PageTitle from '../../components/page-title';

const procedures = [
  {
    value: 'thaiMassage',
    label: 'Thai massage',
  },
  {
    value: 'swedishMassage',
    label: 'Swedish massage',
  },
];

const bookTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

const OrderPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = React.useState('');
  const [procedure, setProcedure] = React.useState('');

  return (
    <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column' }}>
      <BackgroundImage />
      <PageTitle>Online Reservation</PageTitle>
      <Paper
        elevation={3}
        sx={{
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
            gap: 2.5,
          }}
        >
          <TextField
            name="procedure"
            select
            label="Choose a procedure"
            variant="filled"
            fullWidth
            size="small"
            onChange={(event) => setProcedure(event.target.value)}
            value={procedure}
          >
            {procedures.map(
              ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
            )}
          </TextField>
          <TextField
            name="name"
            label="Name"
            type="text"
            variant="filled"
            fullWidth
            size="small"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
            size="small"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextField
            name="phone number"
            label="Phone number"
            type="text"
            variant="filled"
            fullWidth
            size="small"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
          <DesktopDatePicker
            inputFormat="yyyy/MM/DD"
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                name="date"
                label="Date"
                variant="filled"
                fullWidth
                size="small"
                onChange={(event) => setDate(event.target.value)}
                value={date}
              />
            )}
          />
          <TextField
            name="bookTime"
            select
            label="Choose your visit time"
            variant="filled"
            fullWidth
            size="small"
            onChange={(event) => setProcedure(event.target.value)}
            value={procedure}
          >
            {bookTimes.map((time) => <MenuItem key={time} value={time}>{time}</MenuItem>)}
          </TextField>
          <Button type="submit" variant="contained" size="large">Confirm reservation</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OrderPage;
