import axios from "axios";

import { BASE_API_URL } from "@/constants/env";

import { getToken } from "../shared/services/authService";

import { onRequest, onRequestError } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: getToken(),
  },
});

axiosInstance.interceptors.request.use(onRequest, onRequestError);

export default axiosInstance;
