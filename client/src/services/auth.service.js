import axios from "axios"

const API_URL = "http://localhost:4000"

const signup = (email, password, first, last, username, role) => {
  return axios
    .post("http://localhost:5000/users/register", {email, password, first, last, username, role})
    .then((response) => {
      if(response.status === 201) {
        return true;
      }
    })
}

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if(response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

const logout = () => { // nem teljes (a backenden is kellen törölni valamit)
  localStorage.removeItem("user");
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser
};

export default AuthService;