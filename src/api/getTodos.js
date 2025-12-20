import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const getTodos = async () => {
  const { data } = await axios.get(URL);
  return data;
};

export default getTodos;
