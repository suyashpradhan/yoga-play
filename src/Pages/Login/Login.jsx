import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth, useToast } from "../../context";
import { useState } from "react";
import { loginUser } from "../../services";

export const Login = () => {
  const { userAuthDispatch } = useAuth();
  const { toastDispatch } = useToast();

  const [formInputs, setFormInputs] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleInputs = (e) => {
    setFormInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      userName: formInputs.userName,
      password: formInputs.password,
    });

    if (response.status === 200) {
      localStorage?.setItem(
        "login",
        JSON.stringify({ isLoggedIn: true, userAuthToken: response.data.token })
      );
      userAuthDispatch({
        type: "SET_LOGIN",
        payload: { token: response.data.token },
      });
      toastDispatch({ type: "TOGGLE_TOAST", payload: "Logged In Succesful" });
      setTimeout(() => {
        navigate(state?.from ? state.from : "/");
      }, 1000);
    } else {
      toastDispatch({ type: "TOGGLE_TOAST", payload: "Invalid Credentials" });
      setErrors(response.data);
    }
  };
  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">Sign in to your account</h1>
          <form action="">
            <div className="formGroup">
              <label htmlFor="" className="label">
                Username
              </label>
              <input
                type="text"
                onChange={handleInputs}
                value={formInputs.userName}
                name="userName"
                className="formField"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                {" "}
                Password
              </label>
              <input
                type="password"
                onChange={handleInputs}
                value={formInputs.password}
                name="password"
                className="formField"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="button button-primary loginButton"
            >
              Continue
            </button>
          </form>

          <Link to="/register" className="link registerLink">
            Don't have an account? <span>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
