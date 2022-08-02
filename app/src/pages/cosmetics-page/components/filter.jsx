import * as React from 'react';
import {
  Box, Typography, Divider, Autocomplete, Slider, FormControl, TextField,
} from '@mui/material';
import CheckboxGroup from '../../../components/checkbox-group';

const categories = [
  { id: '1', label: 'Face care' },
  { id: '2', label: 'Body care' },
];

const skinTypes = [
  { id: '1', label: 'Normal' },
  { id: '2', label: 'Dry' },
  { id: '3', label: 'Oily' },
  { id: '4', label: 'Combination' },
];

const productTypes = [
  { id: '1', label: 'Moisturiser' },
  { id: '2', label: 'Serum' },
  { id: '3', label: 'Mask' },
  { id: '4', label: 'Exfoliator' },
  { id: '5', label: 'Oil' },
];

const Filter = () => {
  const [priceRange, setPriceRange] = React.useState([1, 50]);
  const [category, setCategory] = React.useState(null);
  const [SkinType, setSkinType] = React.useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = React.useState([]);

  return (
    <Box sx={{ width: 300, p: 1 }}>
      <Divider />
      <FormControl sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{}}>Price range</Typography>
        <Box sx={{ mx: 2 }}>
          <Slider
            value={priceRange}
            min={1}
            max={50}
            onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
            valueLabelDisplay="on"
            sx={{ mt: 4 }}
          />
        </Box>
      </FormControl>
      <Divider sx={{ my: 2 }} />

      <Autocomplete
        disablePortal
        options={categories}
        sx={{ width: '100%' }}
        value={category}
        onChange={(_, newCategory) => setCategory(newCategory)}
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
      <Divider sx={{ my: 2 }} />

      <Autocomplete
        disablePortal
        options={skinTypes}
        sx={{ width: '100%' }}
        value={SkinType}
        onChange={(_, newSkinType) => setSkinType(newSkinType)}
        renderInput={({
          InputLabelProps,
          InputProps,
          inputProps,
          fullWidth,
          id,
        }) => (
          <TextField
            label="Skin type"
            InputLabelProps={InputLabelProps}
            InputProps={InputProps}
            fullWidth={fullWidth}
            id={id}
            inputProps={inputProps}
          />
        )}
      />
      <Divider sx={{ my: 2 }} />

      <CheckboxGroup
        label="Product type"
        options={productTypes}
        value={selectedProductTypes}
        onChange={(_, newProductTypes) => setSelectedProductTypes(newProductTypes)}
      />
    </Box>
  );
};

export default Filter;
