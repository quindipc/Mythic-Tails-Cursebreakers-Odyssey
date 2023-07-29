// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogOut.scss";

export default function LogOut() {
  const [error, setError] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      // CLEAR USER AUTHENTICATION STATE (LOGOUT)
      sessionStorage.removeItem("authToken");
      setIsUserLoggedIn(false);

      // REDIRECT TO HOME
      navigate("/");
    } catch (error) {
      setError("Logout failed. Please try again.");
    }
  };

  return (
    <section className="logout-page">
      <form className="logout" onSubmit={handleLogout}>
        <h1 className="logout__title">Log Out</h1>

        {/* Render the following content conditionally based on user authentication state */}
        {isUserLoggedIn ? (
          <>
            <label>Email:</label>
            <input type="text" name="email" />

            <label>Password:</label>
            <input type="password" name="password" />

            {error && <div className="logout__message">{error}</div>}

            <button className="logout__button">Log Out</button>
          </>
        ) : (
          <p>You are already logged out.</p>
        )}
      </form>
    </section>
  );
}
