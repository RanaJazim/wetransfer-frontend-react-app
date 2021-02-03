import api from "./api";

export function fetchAllEvents() {
  return api.get("/event");
}

export function futureEvents() {
  return api.get("/event/future");
}

export function pastEvents() {
  return api.get("/event/past");
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

export function registerToEvent(userDetail) {
  return api.post("/event-register", userDetail);
}

export function allRegistrationsForEvent() {
  return api.get("/event-register/registration");
}

export function registrationSummaryForCurrentEvent() {
  return api.get("/event-register/summary");
}

export function updateStatus(id) {
  return api.patch("/event-register/" + id);
}

function setFieldsToFormData(fd, fields) {
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
