const domain = process.env.REACT_APP_SERVER_ADDRESS;

const update = async ({ id, ...updateProps }) => {
  const response = await fetch(`${domain}/products/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const fetchAll = async () => {
  const response = await fetch(`${domain}/products?_expand=category&_expand=type`);
  const products = await response.json();

  return products;
};

const ProductService = {
  fetchAll,
  update,
};

export default ProductService;
