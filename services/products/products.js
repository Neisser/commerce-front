import axios from 'axios';
import { baseApi } from 'helpers/constants';

export const getProductById = async (id) => {
  const response = await axios.get(`${baseApi}/products/${id}`);

  if ([200, 201].includes(response.status)) {
    return response.data.Body;
  } else {
    throw new Error(response.error);
  }
};
