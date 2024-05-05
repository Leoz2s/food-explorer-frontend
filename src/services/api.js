import axios from "axios";

// baseURL: "http://localhost:3333",
export const api = axios.create({
  baseURL: "https://api-foodexplorer-6hcw.onrender.com",
  withCredentials: true
});