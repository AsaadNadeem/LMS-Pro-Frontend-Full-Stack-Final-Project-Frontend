import axios from "axios";

// Centralized Axios Configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  withCredentials: true, // REQUIRED for cookies (JWT)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
          console.log("Unauthorized. Please login again token expired.",token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response interceptor (optional advanced)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    if (error.response?.status === 401) {
      console.log("Unauthorized. Please login again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;