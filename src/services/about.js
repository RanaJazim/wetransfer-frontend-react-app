import api from "./api";

export function fetchSingleAbout() {
  return api.get("/about/single");
}

export function createAboutDetails(about) {
  return api.post("/about", about);
}
