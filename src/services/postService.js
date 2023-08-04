// Reemplazar por la URL de la API
const URL_API = "http://localhost:3000/posts";
import axios from "axios";

export const getPosts = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const addPost = async (post) => {
  const response = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (id) => {
  await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });
};

export const likePost = async (id,likes) => {
  await axios.put(`${URL_API}/like/${id}/${likes}`);
  getPosts();
};
