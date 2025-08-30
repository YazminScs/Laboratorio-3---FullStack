import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h2 style={styles.logo}>MiTienda</h2>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Inicio</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/catalogo" style={styles.link}>Catálogo</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/carrito" style={styles.link}>Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#2c3e50',
        color: 'white',
    },
    logo: {
        margin: 0,
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '2rem',
    },
    navItem: {
        margin: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s',
    },
};

export default Navbar;