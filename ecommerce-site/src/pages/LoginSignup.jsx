import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation and submission logic goes here
    };

    return (
        <div className="signup-login-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                {!isLogin && (
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {!isLogin && (
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                )}
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'No account? Signup' : 'Already have an account? Login'}
                </p>
            </form>
        </div>
    );
};

export default LoginSignup;
