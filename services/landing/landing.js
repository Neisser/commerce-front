import axios from 'axios';
import { baseApi } from 'helpers/constants';


export const getFeaturedCompanies = async () => {
    const response = await axios.get(`${baseApi}/home/last-companies?limit=5&skip=0`);
    if ([200, 201].includes(response.status)) {
      return response.data.Body;
    } else {
      throw new Error(response.error);
    }
}

export const getFeaturedOProducts = async () => {
  const response = await axios.get(`${baseApi}/home/products/search?search=camisa&limit=5&skip=0`);
  console.log(response);
  if ([200, 201].includes(response.status)) {
    return response.data.Body;
  } else {
    throw new Error(response.error);
  }
}