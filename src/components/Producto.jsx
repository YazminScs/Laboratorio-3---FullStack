const Producto = ({ nombre, precio }) => {
    return (
        <div style={styles.producto}>
            <h3 style={styles.nombre}>{nombre}</h3>
            <p style={styles.precio}>Precio: ${precio}</p>
            <button style={styles.boton}>Agregar al carrito</button>
        </div>
    );
};

const styles = {
    producto: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
    },
    nombre: {
        marginTop: 0,
        color: '#2c3e50',
    },
    precio: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    boton: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
};

export default Producto;