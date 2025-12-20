import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const updateTodo = async (id, update) => {
  const { data } = await axios.put(`${URL}/${id}`, update);
  return data;
};

export default updateTodo;
