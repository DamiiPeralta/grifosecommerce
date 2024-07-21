import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, removeAllFromCart } from '../../reducers/cartReducer';
import { Link } from 'react-router-dom';
import styles from './SidebarCart.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SidebarCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector((state) => state.cart.cartItems) || [];
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecreaseQuantity = (id) => {
        // Decrease quantity by removing one instance of the product
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            dispatch(removeFromCart({ id }));
        }
    };

    const handleRemoveAllFromCart = (id) => {
        dispatch(removeAllFromCart({ id }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (typeof item.price === 'number' ? item.price : 0), 0).toFixed(2);
    };

    const addCartItems = (cartItems) => {
        const addItems = [];
        const itemMap = new Map();

        cartItems.forEach((item) => {
            if (itemMap.has(item.id)) {
                itemMap.get(item.id).quantity += 1;
            } else {
                itemMap.set(item.id, { ...item, quantity: 1 });
            }
        });

        itemMap.forEach((value) => addItems.push(value));
        return addItems;
    };

    const addCart = addCartItems(cart);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Cerrar' : 'Carrito'}
            </button>
            {isOpen && (
                <div className={styles.cartContent}>
                    <h2>Carrito de Compras</h2>
                    {addCart.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <ul>
                            {addCart.map((item) => (
                                <li key={item.id} className={styles.liCustom}>
                                    <img src={item.image} alt={item.name} className={styles.cartImage} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <div className={styles.quantityControls}>
                                            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                            <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                                        </div>
                                        <button onClick={() => handleRemoveAllFromCart(item.id)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.total}>
                        <h3>Total: ${calculateTotal()}</h3>
                    </div>
                    <Link to="/cart">
                        <button className="btn btn-outline-dark mt-2">Ir al Carrito</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SidebarCart;
