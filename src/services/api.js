import axios from "axios";

export const api = axios.create({
  // baseURL: "https://api-foodexplorer-6hcw.onrender.com",
  baseURL: "http://localhost:3333",
  withCredentials: true,
});