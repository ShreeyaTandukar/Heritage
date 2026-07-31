import axios from "axios";

// Single source of truth for the backend URL.
// Change this in one place if the backend moves off localhost:5000.
const api = axios.create({
  baseURL: "http://192.168.100.1/api",
});

// Automatically attach the JWT (if we have one) to every request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;