import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/contactUs.module.css";
import "../styles/navbarStyle.css";
import logo from "../images/beeswax_logo.png";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can integrate this with your backend API
        console.log(formData);
        alert('Message sent!');
    };

    return (
        <div>
            <main className="contact-container">
                <h1>Contact Us</h1>
                <p>Please fill out the form below to get in touch with us.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button type="submit">Send Message</button>
                </form>
            </main>
        </div>
    );
}
