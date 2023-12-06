import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import { auth, register } from "./firebase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="Logo" />
      </Link>
      <div className="login__container">
        <h1>Create New Account</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <div>
          <button onClick={handleRegister} className="login__signInButton">
            Signup
          </button>
        </div>
        <p>
          By signing up, you agree to the website's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <Link to="/login">
          <button className="login__registerButton">
            Already a user, Go to login page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
