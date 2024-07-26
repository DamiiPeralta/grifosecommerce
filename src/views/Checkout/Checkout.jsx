import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
    const cart = useSelector(state => state.cart.cartItems) || [];
    const user = useSelector(state => state.user); // Asumiendo que tienes un estado de usuario en tu store
    const navigate = useNavigate();

    if (!user.isLoggedIn) {
        navigate('/login');
        return null;
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (typeof item.price === 'number' ? item.price * item.quantity : 0), 0).toFixed(2);
    };

    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="container my-4">
            <h2>Resumen de Compra</h2>
            <div className="card p-3">
                <div className="mb-3">
                    <h4>Fecha: {currentDate}</h4>
                    <h4>Nombre de usuario: {user.username}</h4>
                    <h4>Email: {user.email}</h4>
                </div>
                <ul className="list-group mb-3">
                    {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-1">{item.name}</h5>
                                <p className="mb-1">Cantidad: {item.quantity}</p>
                                <p className="mb-1">Precio unitario: ${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</p>
                            </div>
                            <p className="mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>Total: ${calculateTotal()}</h4>
                    <button className="btn btn-success">WhatsApp</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
