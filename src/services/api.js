import axios from "axios";

import { SERVER_BASE_URL } from "../utils";

const api = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 30000,
});

export default api;
