import api from "./api";

export function fetchSingleAbout() {
  return api.get("/about/single");
}

export function createAboutDetails(about) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, about);

  return api.post("/about", fd, config);
}

export function updateAboutDetails(about) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, about);

  return api.patch("/about/" + about.id, fd, config);
}

function setFieldsToFormData(fd, fields) {
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
