import axios from "axios";
import { getCookie } from "cookies-next";
const API_BASE_URL = process.env.NEXT_PUBLIC_URL || "/api";

console.log(API_BASE_URL);

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getCookie("saloonsession");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
