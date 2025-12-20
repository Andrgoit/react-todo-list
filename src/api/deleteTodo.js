import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${URL}/${id}`);
  return data;
};

export default deleteTodo;
