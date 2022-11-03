import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { BackgroundImage, PageTitle } from '../../components';

const domain = process.env.REACT_APP_SERVER_ADDRESS;

const lettersOnly = /^[a-ząčęėįšųūž ]+$/i;
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const yesterday = moment().subtract(1, 'days');
const twoWeeksAhead = moment().add(2, 'weeks');

const bookTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  date: '',
  procedure: '',
};

const validationSchema = yup.object({
  procedure: yup.string()
    .required('Required'),
  name: yup.string()
    .required('Required')
    .min(3, 'Min 3 letters')
    .matches(lettersOnly, 'Letters only'),
  email: yup.string()
    .required('Required')
    .email('Invalid format'),
  phoneNumber: yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  date: yup.date('Format should be YYYY/MM/DD')
    .required('Required')
    .min(yesterday, 'Cannot be past date')
    .max(twoWeeksAhead, 'Cannot be more than 2 weeks ahead'),
  time: yup.string()
    .required('Required'),
});

const OnlineReservationPage = () => {
  const [treatments, setTreatments] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domain}/services`)
      .then((res) => res.json())
      .then((fetchedTreatments) => setTreatments(fetchedTreatments));
  }, []);

  const onSubmit = async (values) => {
    console.log('Form is confirmed');
    console.log(values);
  };

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const belowSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column' }}>
      <BackgroundImage />
      <PageTitle>Online Reservation</PageTitle>
      <Paper
        elevation={3}
        sx={belowSmScreen
          ? {
            width: '90%',
            p: 2,
            mx: 'auto',
            bgcolor: 'white',
            zIndex: 1,
          }

          : {
            width: 400,
            p: 3,
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
            name="procedure"
            select
            label="Choose a procedure"
            variant="filled"
            fullWidth
            size="small"
            value={values.procedure}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.procedure && Boolean(errors.procedure)}
            helperText={touched.procedure && errors.procedure}
          >
            {treatments.map(
              ({
                id, title, value, price,
              }) => (
                <MenuItem key={id} value={value}>
                  {title}
                  {' '}
                  -
                  {' '}
                  {price}
                </MenuItem>
              ),
            )}
          </TextField>
          <TextField
            name="name"
            label="Name"
            type="text"
            variant="filled"
            fullWidth
            size="small"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
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
            name="phoneNumber"
            label="Phone number"
            type="text"
            variant="filled"
            fullWidth
            size="small"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
          <DesktopDatePicker
            inputFormat="yyyy/MM/DD"
            disableMaskedInput
            disablePast
            value={values.date}
            onChange={(momentInstance) => {
              if (momentInstance.isValid) {
                setFieldTouched('date', true, false);
                setFieldValue('date', momentInstance, true);
              }
            }}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                name="date"
                label="Date"
                variant="filled"
                fullWidth
                size="small"
                onBlur={handleBlur}
                error={touched.date && Boolean(errors.date)}
                helperText={touched.date && errors.date}
              />
            )}
          />
          <TextField
            name="time"
            select
            label="Choose your visit time"
            variant="filled"
            fullWidth
            size="small"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.time && Boolean(errors.time)}
            helperText={touched.time && errors.time}
          >
            {bookTimes.map(
              (bookTime) => <MenuItem key={bookTime} value={bookTime}>{bookTime}</MenuItem>,
            )}
          </TextField>
          <Button type="submit" variant="contained" size="large">Confirm reservation</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OnlineReservationPage;
