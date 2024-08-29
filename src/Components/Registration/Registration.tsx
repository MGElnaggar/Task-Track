import React, { useState, useEffect } from 'react';

import eye from '../../Assets/eye-svgrepo-com.svg';
import eyeClosed from '../../Assets/eye-slash-svgrepo-com.svg';

import { useNavigate } from "react-router-dom";

import style from './Registration.module.css';

const Registration: React.FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>(''); 
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.com$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = () => {
        setError(null);

        if (!fullName.trim()) {
            setError('Full name is required.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format. Please enter a valid email.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long, include an uppercase letter, a number, and a special character, and cannot start with a number or special character.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password and confirmation password do not match.');
            return;
        }

        // If validation passes, you can proceed with your login logic here.
        navigate("/");
    };


    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, [error]);


    return (
        <div className={style.signInContainer}>
            <div className={style.signInBox}>
                <div className={style.logo}>
                    <span>Ecom payments</span>
                </div>
                <div className={style.welcomeText}>Welcome</div>

                {error && <div className={style.errorMessage}>{error}</div>}

                <div className={style.fullNameField}>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Full Name" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                
                <div className={style.emailField}>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={style.passwordField}>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        className={style.inputField} 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span 
                        className={style.showPasswordIcon} 
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword 
                            ? <img src={eyeClosed} alt="Hide password" /> 
                            : <img src={eye} alt="Show password" /> 
                        }
                    </span>
                </div>

                <div className={style.confirmPasswordField}>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        className={style.inputField} 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button 
                    className={style.loginButton}
                    onClick={handleLogin}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
};

export default Registration;