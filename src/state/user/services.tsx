import axios from "axios";

export const loginUser = async (username: string, password: string) => {
    return await axios.post(`http://localhost:5000/auth/login`, {
      username: username,
      password: password,
    });
  };

export const logoutUser = () => {
    localStorage.removeItem("user");
}

export const validateToken = async (token: string) => {
  return await axios
    .get(`http://localhost:5000/auth/verifytoken`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((response) => {
      if (response.status === 204) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
