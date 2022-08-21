import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import BackgroundImage from '../components/background-image';
import PageTitle from '../components/page-title';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object({
  firstName: yup.string()
    .required('Required')
    .min(3, 'Min 3 letters')
    .matches(/^[a-ząčęėįšųūž]+$/i, 'Letters only'),
  lastName: yup.string()
    .required('Required')
    .min(3, 'Min 3 letters')
    .matches(/^[a-ząčęėįšųūž]+$/i, 'Letters only'),
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
  passwordConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const Register = () => {
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
          onSubmit={handleSubmit}
          disabled={!dirty || !isValid}
        >
          <TextField
            name="firstName"
            label="First name"
            type="text"
            variant="filled"
            fullWidth
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            name="lastName"
            label="Last Name"
            type="text"
            variant="filled"
            fullWidth
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastname && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
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
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            name="passwordConfirmation"
            label="Password confirmation"
            type="password"
            variant="filled"
            fullWidth
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
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
};

export default Register;
