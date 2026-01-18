import axios from "axios";

const API_URL = "http://localhost:3000/records";

export async function getRecords() {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function saveRecord(record) {
  const res = await axios.post(API_URL, record);
  return res.data;
}

export async function deleteRecord(id) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
