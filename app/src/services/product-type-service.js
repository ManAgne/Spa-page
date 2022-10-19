const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/productTypes`);
  const productTypes = await response.json();

  return productTypes;
};

const ProductTypeService = {
  fetchAll,
};

export default ProductTypeService;
