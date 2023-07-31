// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

// ASSETS 
import Creature from "../../assets/images/pets-creatures/Mythic-Tails-Creature-2.svg"


export default function Register() {
  const [error, setError] = useState("");
  const BASE_URL = "http://localhost:8080/api/";

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

     // POST REQUEST TO REGISTER WITH  NAME, EMAIL AND PASSWORD
     try {
      const response = await axios.post(BASE_URL + "users/register", {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });
       
      // HANDLE SUCCESSFUL REGISTRATION
       if (response.status === 201) {
         console.log("Registration successful:", response.data);
         setError("")

         //REDIRECT TO LOGIN
         navigate("/login")

       }
    } catch (error) {
      setError(`REgistration failed: ${error.message}`);
    }
  }

  return (
    <section className="register">
       <img className="register__image" src={Creature} alt="Image of a Creature" />
     
      <form className="register__form" onSubmit={handleRegister}>
        <h1 className="register__title">Register</h1>

        <div className="register__container">
        <label className="register__label">Name:</label>
        <input className="register__input" type="text" name="name" />
        </div>

        <div className="register__container">
        <label className="register__label">Email:</label>
        <input  className="register__input"  type="text" name="email" />
        </div>

        <div className="register__container">
        <label className="register__label">Password:</label>
        <input  className="register__input"  type="password" name="password" />
        </div>

        {error && <div className="register__message">{error}</div>}

        <button className="register__button">Register</button>
      </form>
    </section>
  );
}
