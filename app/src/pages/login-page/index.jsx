import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import BackgroundImage from '../../components/background-image';
import PageTitle from '../../components/page-title';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid format'),
  password: yup.string()
    .required('Required')
    .min(8, 'Min 8 characters')
    .matches(/[a-z]/, 'At least 1 lowercase letter')
    .matches(/[A-Z]/, 'At least 1 uppercase letter')
    .matches(/\d/, 'At least 1 number')
    .matches(/\W/, 'At least 1 special character'),
});

const Login = () => {
  const onSubmit = async (values) => {
    console.log('Form is confirmed');
    console.log(values);
  };

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column' }}>
      <BackgroundImage />
      <PageTitle>Existing account</PageTitle>
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
          onSubmit={handleSubmit}
          disabled={!dirty || !isValid}
        >
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
            size="small"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            size="small"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
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
};

export default Login;
