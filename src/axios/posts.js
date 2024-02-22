import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:3001/posts",
});

export default postsAxios;
