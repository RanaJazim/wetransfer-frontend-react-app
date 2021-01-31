import api from "./api";

export function fetchSingleAbout() {
  return api.get("/about/single");
}

export function createAboutDetails(about) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  fd.append("image", about.image);
  fd.append('title', about.title);
  fd.append('description', about.description);

  return api.post("/about", fd, config);
}

export function updateAboutDetails(about) {
  return api.patch("/about/" + about.id, about, {
    headers: { "Content-Type": "multipart/form-data; boundary=something" },
  });
}
