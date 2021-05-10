import { Link } from "react-router-dom";
import Logo from "../../Assets/images/Logo.svg";

export const LoginCard = () => {
  return (
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
              placeholder="Enter Username"
              className="formField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="" className="label">
              {" "}
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="formField"
            />
          </div>
          <button className="button button-primary loginButton">
            Continue
          </button>
        </form>

        <Link to="/register" className="link registerLink">
          Don't have an account? <span>Sign up</span>
        </Link>
      </div>
    </div>
  );
};
