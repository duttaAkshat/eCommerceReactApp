import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import { auth, register } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // Added this import

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password); // Modified this line
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

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
        <h1>Sign-in</h1>
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
          <button
            onClick={handleSignIn}
            className="login__signInButton"
            type="submit"
          >
            Sign-In
          </button>
        </form>
        <p>
          By signing in, you agree to the website's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={handleRegister} className="login__registerButton">
          Create a new Account
        </button>
      </div>
    </div>
  );
}

export default Login;
 