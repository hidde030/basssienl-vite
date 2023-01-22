import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://bassienl.nl/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${username}:${password}`),
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setIsLoggedIn(true);
        //save the auth header to session storage
        sessionStorage.setItem("auth", "Basic " + btoa(`${username}:${password}`));
        sessionStorage.setItem("login", "true");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Navigate to="/admin" />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
``;
