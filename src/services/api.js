import axios from "axios";

import { SERVER_BASE_URL } from "../utils";
import * as userStorage from "../utils/user_storage";

const api = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const user = userStorage.getUser();
    if (user && user.token) {
      config.headers["x-auth-token"] = user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // if (error.response.status === 401) {
    //   window.location.pathname("/");
    // }
    return Promise.reject(error);
  }
);

export default api;
