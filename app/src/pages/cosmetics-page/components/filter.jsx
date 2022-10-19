import * as React from 'react';
import {
  Box,
  Divider,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AutoSelectField, CheckboxField, RangeField } from '../../../components';
import CategoryService from '../../../services/category-service';
import ProductTypeService from '../../../services/product-type-service';

const MIN = 0;
const MAX = 50;

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = React.useState([]);
  const [productTypes, setProductTypes] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([1, 50]);
  const [category, setCategory] = React.useState(null);
  const [selectedProductTypes, setSelectedProductTypes] = React.useState([]);

  const handlePriceRangeChange = (_, newPriceRange) => {
    const [min, max] = newPriceRange;
    if (min === MIN) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === MAX) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
    setPriceRange(newPriceRange);
  };

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      searchParams.set('categoryId', newCategory.id);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const handleProductTypesChange = (_, newProductTypes) => {
    const ids = newProductTypes.map((productType) => productType.id);
    searchParams.delete('productTypeId');
    ids.forEach((id) => searchParams.append('productTypeId', id));

    setSearchParams(searchParams);
    setSelectedProductTypes(newProductTypes);
  };

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
        onChange={handlePriceRangeChange}
        min={MIN}
        max={MAX}
      />
      <Divider sx={{ my: 2 }} />

      <AutoSelectField
        options={categories}
        value={category}
        onChange={handleCategoryChange}
      />
      <Divider sx={{ my: 2 }} />

      <CheckboxField
        label="Product type"
        options={productTypes}
        value={selectedProductTypes}
        onChange={handleProductTypesChange}
      />
    </Box>
  );
};

export default Filter;
