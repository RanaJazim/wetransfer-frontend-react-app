import api from "./api";

export function fetchAllEvents() {
  return api.get("/event");
}

export function fetchSingleEvent(id) {
  return api.get("/event/" + id);
}

export function createEvent(event) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, event);

  return api.post("/event", fd, config);
}

export function updateEvent(event) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, event);

  return api.patch("/event/" + event.id, fd, config);
}

function setFieldsToFormData(fd, fields) {
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
