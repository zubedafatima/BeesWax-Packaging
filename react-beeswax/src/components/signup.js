import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/signStyle.module.css";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const[name, setName] = useState("");
    const[phoneno, setPhoneno] = useState("");
    const[creditcard, setCreditcard] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = { username, name, password, email, phoneno, creditcard };
    
        try {
          const response = await fetch("http://localhost:3000/api/v1/users/user-signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          console.log("Response status:", response.status);
          console.log("Response:", await response.json());

          if (response.ok) {
            alert("User created successfully!");
            navigate('/profile', { state: { email } });
          } else {
            const errorData = await response.json();
            alert("Error: " + errorData.error);
          }
        } catch (error) {
          alert("Error: " + error.message);
        }
      };
    
    return (
        <div className={styles.signContainer}>
            <div className={styles.scenterContent}>
        <h1>Sign Up</h1>
        <form className={styles.signForm} onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label>Name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label>PhoneNo:</label>
            <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            />
            <label>CreditCard:</label>
            <input
            type="text"
            value={creditcard}
            onChange={(e) => setCreditcard(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
        <p>
            Already have an account? <Link to="/login">Login Here.</Link>
        </p>
        </div>
        </div>
    );
    }