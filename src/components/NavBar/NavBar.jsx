import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/GGrifos.png';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg" className={styles.navbarCustom}>
            <Container>
                <Navbar.Brand href="/" className={styles.navbarBrandCustom}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/alegra">
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navLinkCustom}>Alegra</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cruz">
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navLinkCustom}>Cruz</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/accesorios">
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navLinkCustom}>Accesorios</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/monocomandos">
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navLinkCustom}>Monocomandos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/mesada-cocina">
                            <Nav.Link onClick={() => setExpanded(false)} className={styles.navLinkCustom}>Mesada Cocina</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className={`d-flex ${styles.searchForm}`} onSubmit={handleSearch}>
                        <FormControl
                            type="text"
                            placeholder="Buscar productos..."
                            className={`mr-sm-2 ${styles.searchInput}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-light" className={`${styles.searchButton}`}>Buscar</Button>
                    </Form>
                    <div className={styles.authButtons}>
                        {user ? (
                                <>
                                    <p className={styles.username}>{user.username}</p>
                                    <Button variant="outline-light" onClick={handleLogout} className={styles.customButton}>Cerrar Sesión</Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <Button variant="outline-light" className={styles.customButton}>Iniciar Sesión</Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button variant="outline-light" className={styles.customButton}>Registrarse</Button>
                                    </Link>
                                </>
                            )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
