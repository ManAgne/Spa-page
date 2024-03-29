import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoSelectField = ({
  options,
  value,
  onChange,
}) => (
  <Autocomplete
    disablePortal
    options={options}
    sx={{ width: '100%' }}
    value={value}
    onChange={onChange}
    renderInput={({
      InputLabelProps,
      InputProps,
      inputProps,
      fullWidth,
      id,
    }) => (
      <TextField
        label="Category"
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        fullWidth={fullWidth}
        id={id}
        inputProps={inputProps}
      />
    )}
  />
);

export default AutoSelectField;
