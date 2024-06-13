import React from "react";
import { useLocation } from "react-router-dom";

export function Profile() {
    const location = useLocation();
    const { email } = location.state || {};

    return (
        <div>
            <h1>Profile Page</h1>
            {email ? (
                <p>Welcome, {email}!</p>
            ) : (
                <p>Welcome, raheimeen.s@gmail.com</p>
            )}
        </div>
    );
}
