import axios from "axios";
import { login, register } from "../api";

export const registerUser = async ({ fullName, email, password, userName }) => {
  try {
    const response = await axios.post(`${register}`, {
      fullName,
      email,
      password,
      userName,
    });
    return response;
  } catch (error) {
    const errorResponse = JSON.stringify(error.response.data);
    console.error(errorResponse);
    return error.response.data;
  }
};

export const loginUser = async ({ userName, password }) => {
  try {
    const response = await axios.post(`${login}`, {
      userName,
      password,
    });
    return response;
  } catch (error) {
    const errorResponse = JSON.stringify(error.response.data);
    console.error(errorResponse);
    return error.response.data;
  }
};
