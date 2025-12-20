import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const addTodo = async (todo) => {
  const { data } = await axios.post(URL, todo);
  return data;
};

export default addTodo;
