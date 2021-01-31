import axios from "axios";

export function createAboutDetails(about) {
  return axios.post("/about", about);
}
