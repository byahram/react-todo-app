import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    // authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

/**
 * ✅ 요청 인터셉터: 모든 요청을 로깅
 */
api.interceptors.request.use(
  (request) => {
    console.log(
      "[API Request] ▶️",
      request.method?.toUpperCase(),
      request.url,
      request
    );
    return request;
  },
  (error) => {
    console.error("[API Request Error] ❌", error);
    return Promise.reject(error);
  }
);

/**
 * ✅ 응답 인터셉터: 모든 응답을 로깅
 */
api.interceptors.response.use(
  (response) => {
    console.log(
      "[API Response] ✅",
      response.status,
      response.config.url,
      response.data
    );
    return response;
  },
  (error) => {
    console.error(
      "[API Response Error] ❌",
      error.response?.status,
      error.response?.config?.url,
      error.response?.data
    );
    return Promise.reject(error);
  }
);

export default api;
