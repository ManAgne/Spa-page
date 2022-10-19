import * as React from 'react';
import {
  Box,
  Divider,
} from '@mui/material';
import { AutoSelectField, CheckboxField, RangeField } from '../../../components';
import CategoryService from '../../../services/category-service';
import ProductTypeService from '../../../services/product-type-service';

const Filter = () => {
  const [categories, setCategories] = React.useState([]);
  const [productTypes, setProductTypes] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([1, 50]);
  const [category, setCategory] = React.useState(null);
  // const [SkinType, setSkinType] = React.useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedProductTypes] = await Promise.all([
        CategoryService.fetchAll(),
        ProductTypeService.fetchAll(),
      ]);
      setCategories(fetchedCategories);
      setProductTypes(fetchedProductTypes);
    })();
  }, []);

  return (
    <Box sx={{ width: 300, p: 1 }}>
      <Divider />
      <RangeField
        label="Price"
        value={priceRange}
        onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
        min={0}
        max={25}
      />
      <Divider sx={{ my: 2 }} />

      <AutoSelectField
        options={categories}
        value={category}
        onChange={(_, newCategory) => setCategory(newCategory)}
      />
      <Divider sx={{ my: 2 }} />

      <CheckboxField
        label="Product type"
        options={productTypes}
        value={selectedProductTypes}
        onChange={(_, newProductTypes) => setSelectedProductTypes(newProductTypes)}
      />
    </Box>
  );
};

export default Filter;
