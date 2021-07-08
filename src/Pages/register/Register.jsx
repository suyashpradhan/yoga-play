import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../ServerRequests/server-requests";
import { useToastHook } from "../../CustomHook/useToastHook";

import "../Login/Login.css";

export const Register = () => {
  const toast = useToastHook(3000);

  const [formInputs, setFormInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setFormInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await registerUser({
      fullName: formInputs.fullName,
      email: formInputs.email,
      password: formInputs.password,
      userName: formInputs.userName,
    });
    console.log(response);

    if (response.status === 200) {
      toast("error", "Succesfully Signed up");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      setErrors(response.data);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">
            Create your YOGAPLAY Account and get personalised access!
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Full Name
              </label>
              <input
                type="text"
                className="formField"
                value={formInputs.fullName}
                onChange={handleInputs}
                name="fullName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                User Name
              </label>
              <input
                type="text"
                className="formField"
                value={formInputs.userName}
                onChange={handleInputs}
                name="userName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Email
              </label>
              <input
                type="text"
                className="formField"
                value={formInputs.email}
                onChange={handleInputs}
                name="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Password
              </label>
              <input
                type="password"
                className="formField"
                value={formInputs.password}
                onChange={handleInputs}
                name="password"
              />
            </div>
            <button className="button button-primary loginButton">
              Continue
            </button>
          </form>

          <Link to="/login" className="link registerLink">
            Already have an account? <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
