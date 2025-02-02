import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.some((user) => user.email === email)) {
      setError("Email already exists!");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div className="signup-container">
    <div className="signup-box">
      <h2 className="signup-title">Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="signup-text">
        Already have an account? <a href="/" className="signup-link">Login</a>
      </p>
    </div>
  </div>
  );
};

export default Signup;
