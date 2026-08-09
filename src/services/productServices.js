const PROD_API = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  const response = await fetch(PROD_API);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'failed to load products');
  }

  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(PROD_API + `/` + id);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'failed to load products');
  }

  return data;
};
