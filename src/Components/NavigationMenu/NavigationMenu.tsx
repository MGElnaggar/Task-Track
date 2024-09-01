import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import style from './NavigationMenu.module.css';

const NavigationMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logoBtn = () => {
        navigate("/");
    };

    const registrationBtn = () => {
        navigate("/registration");
    };

    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <div className={style.logo} onClick={logoBtn}>
                    Ecom payments
                </div>
                <div className={`${style.links} ${isOpen ? style.show : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/postList">Post List</a>
                    <a href="/">Contact</a>
                    <button onClick={registrationBtn}>Registration</button>
                </div>
                <div className={style.hamburger} onClick={toggleMenu}>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </div>
            </div>
        </nav>
    );
};

export default NavigationMenu;