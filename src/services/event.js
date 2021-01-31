import api from "./api";

export function fetchAllEvents() {
  return api.get("/event");
}

export function createEvent(event) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, event);

  return api.post("/event", fd, config);
}

function setFieldsToFormData(fd, fields) {
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
