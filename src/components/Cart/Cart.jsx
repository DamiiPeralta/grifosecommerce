import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, removeAllFromCart } from '../../reducers/cartReducer';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Cart.module.css';

const Cart = () => {
    const cart = useSelector(state => state.cart.cartItems) || [];
    const user = useSelector(state => state.user); // Asumiendo que tienes un estado de usuario en tu store
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleCheckout = () => {
        if (user.isLoggedIn) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container my-4">
            <h2>Carrito de Compras</h2>
            {addCart.length === 0 ? (
                <div className={styles.emptyCart}> 
                     <p>Tu carrito está vacío</p>
                </div>
               
            ) : (
                <ul className="list-group">
                    {addCart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex align-items-center">
                            <img src={item.image} alt={item.name} className="img-fluid me-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            <div className="flex-grow-1">
                                <h3 className="h5 mb-1">{item.name}</h3>
                                <p className="mb-1">${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</p>
                                <p className="mb-1">Cantidad: {item.quantity}</p>
                                <div className="d-flex">
                                    <button className="btn btn-secondary me-2" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <button className="btn btn-secondary" onClick={() => handleIncreaseQuantity(item)}>+</button>
                                </div>
                                <button className="btn btn-danger mt-2" onClick={() => handleRemoveAllFromCart(item.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-4">
                <h3>Total: ${calculateTotal()}</h3>
                <button className="btn btn-outline-dark mt-2" onClick={handleCheckout}>Comprar</button>
            </div>
        </div>
    );
};

export default Cart;
