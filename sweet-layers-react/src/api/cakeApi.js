import axios from "axios";

const API_URL = "http://localhost:3000";

export const getCakes = async () => {
  const response = await axios.get(`${API_URL}/cakes`);
  return response.data;
};

export const getCakeById = async (id) => {
  const response = await axios.get(`${API_URL}/cakes/${id}`);
  return response.data;
};

export const createOrder = async (order) => {
  const res = await axios.post(`${API_URL}/orders`, order);
  return res.data;
};

// GET ORDERS
export const getOrders = async () => {
  const res = await axios.get(`${API_URL}/orders`);
  return res.data;
};

// CANCEL ORDER
export const cancelOrder = async (id) => {
  const res = await axios.patch(`${API_URL}/orders/${id}`, {
    status: "cancelled"
  });
  return res.data;
};

