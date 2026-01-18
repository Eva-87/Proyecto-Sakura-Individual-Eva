import axios from "axios";

const BASE_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const getAllCards = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
