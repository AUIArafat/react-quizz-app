export const storageData = {
  setLoggedInUser(user) {
    if (user) sessionStorage.setItem("login_user", JSON.stringify(user));
  },
  getLoggedInUser() {
    const user = sessionStorage.getItem("login_user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  logout() {
    sessionStorage.removeItem("login_user");
  },
  setValue(key, value) {
    return localStorage.setItem(key, value);
  },
  getValue(key) {
    return localStorage.getItem(key);
  },
};
