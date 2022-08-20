import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BackgroundImage from '../components/background-image';
import PageTitle from '../components/page-title';

const Register = () => (
  <Box sx={{ pt: 7, display: 'flex', flexDirection: 'column' }}>
    <BackgroundImage />
    <PageTitle>New account creation</PageTitle>
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
          name="name"
          type="text"
          label="Name"
          variant="filled"
          fullWidth
        />
        <TextField
          name="surname"
          type="text"
          label="Surname"
          variant="filled"
          fullWidth
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="filled"
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="filled"
          fullWidth
        />
        <TextField
          name="passwordConfirmation"
          type="password"
          label="Password confirmation"
          variant="filled"
          fullWidth
        />
        <Button type="submit" variant="contained" size="large">Register</Button>
        <Typography variant="body2">
          Already have an account? Login
          {' '}
          <RouterLink to="/login">here</RouterLink>
          .

        </Typography>
      </Box>
    </Paper>
  </Box>
);

export default Register;
