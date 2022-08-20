import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import BackgroundImage from '../components/background-image';
import PageTitle from '../components/page-title';

const Login = () => (
  <Box sx={{ pt: 7, display: 'flex', flexDirection: 'column' }}>
    <BackgroundImage />
    <PageTitle>Your account</PageTitle>
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
          name="email"
          email="email"
          label="Email"
          variant="filled"
          fullWidth
        />
        <TextField
          name="password"
          email="password"
          label="Password"
          variant="filled"
          fullWidth
        />
        <Button type="submit" variant="contained" size="large">Login</Button>
        <Typography variant="body2">
          Do not have an account yet? Register
          {' '}
          <RouterLink to="/register">here</RouterLink>
          .

        </Typography>
      </Box>
    </Paper>
  </Box>
);

export default Login;
