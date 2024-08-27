import axios from "axios";

const API_URL = "http://localhost:8000/livros"; // Substitua com a URL do seu backend

export const getLivros = () => axios.get(`${API_URL}`);
export const getLivro = (id) => axios.get(`${API_URL}/${id}`);
export const addLivro = (livro) => axios.post(`${API_URL}`, livro);
export const updateLivro = (id, livro) =>
  axios.patch(`${API_URL}/${id}`, livro);
export const deleteLivro = (id) => axios.delete(`${API_URL}/${id}`);
