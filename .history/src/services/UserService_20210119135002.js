import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  getSingleUser = (id) => this.get("users/" + id);

  getUsers = (page = 1, perPage = 20) =>
    this.get("users?page=" + page + "&perPage=" + perPage).then();
  getAdmins = (page = 1, perPage = 20) =>
    this.get("users/admins?page=" + page + "&perPage=" + perPage).then();
  getGuides = (page = 1, perPage = 20) =>
    this.get("users/guides?page=" + page + "&perPage=" + perPage).then();
  register = (name, email, password, role) =>
    this.post("users/register", { password, email, name, role });
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };
  isGuide = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "guide") return true;
      else return false;
    } else return false;
  };
  isUser = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "user") return true;
      else return false;
    } else return false;
  };

  deleteUser = () => {};
}

let userService = new UserService();
export default userService;
