export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
}

export function clearFromStorage() {
  localStorage.removeItem("user");
}

export function getToken() {
  const user = getUser();
  return user.token;
}

export function isUserExist() {
  return getUser() ? true : false;
}
