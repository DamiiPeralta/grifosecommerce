// src/components/SessionManager/SessionManager.jsx

import React, { useState, useEffect } from 'react';
import Login from '../../views/Login/Login';
import styles from './SessionManager.module.css';

const SessionManager = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const handleLogin = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    return (
        <div className={styles.sessionManager}>
            {user ? (
                <div>
                    <h2>Bienvenido, {user.email}</h2>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default SessionManager;
