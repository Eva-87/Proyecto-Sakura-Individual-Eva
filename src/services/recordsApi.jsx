import axios from "axios";

const BASE_URL = "http://localhost:3001/records";

export const getRecords = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const saveRecord = async (record) => {
  const res = await axios.post(BASE_URL, record);
  return res.data;
};

export const deleteRecord = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
