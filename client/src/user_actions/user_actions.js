import axios from "axios";

export const loginUser = (userData) => {
  return axios.post("/api/users/login", userData).then((res) => {
    return res.data;
  });
};
