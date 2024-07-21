import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        
        const timeout = setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/");
        }, 5000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <div className={styles.errorPageContainer}>
            <h1>Page not found</h1>
            <p>Redirecting to home in {countdown} seconds... </p>
        </div>
    );
}

export default ErrorPage;
