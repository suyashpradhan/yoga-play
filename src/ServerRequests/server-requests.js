import axios from "axios";
import { login, register } from "../API";

export const registerUser = async ({ fullName, email, password, userName }) => {
  let response = {};
  try {
    response = await axios.post(`${register}`, {
      fullName,
      email,
      password,
      userName,
    });
  } catch (error) {
    response.data = {
      error: error.response.data,
    };
  }

  return response;
};

export const loginUser = async ({ userName, password }) => {
  let response = {};
  try {
    response = await axios.post(`${login}`, {
      userName,
      password,
    });
  } catch (error) {
    response.data = {
      error: error.response.data,
    };
  }

  return response;
};
