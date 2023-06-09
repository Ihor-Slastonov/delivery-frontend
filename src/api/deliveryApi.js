import axios from 'axios';

const BASE_URL = 'https://delivery-backend-f07k.onrender.com/api';

const fetchAllShops = async () => {
  const response = await axios.get(`${BASE_URL}/shops`);
  return response.data;
};

const fetchShopsItemsById = async id => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

const createNewOrder = async order => {
  const response = await axios.post(`${BASE_URL}/orders/`, order);
  return response.data;
};
const deliveryApi = { fetchAllShops, fetchShopsItemsById, createNewOrder };

export default deliveryApi;
