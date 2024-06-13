import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/loginStyle.module.css";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Navigate to /profile with email state
        navigate('/profile', { state: { email } });
    };
    
    return (
        <div className={styles.loginContainer}>
            <div className={styles.centerContent}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <Link to="/signup">Sign Up Here.</Link>
        </p>
        </div>
        </div>
    );
    }