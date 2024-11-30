import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// Fetch movies from the server
export const fetchMovies = () => API.get("/movies");

// User authentication
export const signup = (userData) => API.post("/auth/signup", userData);
export const login = (userData) => API.post("/auth/login", userData);
export const logout = () => API.post("/auth/logout");

// Chatbot API
export const chatWithBot = (message) =>
  API.post("/chat", { message }); // Send message payload

export default API;
