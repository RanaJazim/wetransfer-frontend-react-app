import api from "./api";

export function login(user) {
  return api.post("/auth/login", user);
}
