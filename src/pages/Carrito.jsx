const Carrito = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Carrito de Compras</h1>
            <div style={styles.message}>
                <p>Por ahora, tu carrito está vacío.</p>
                <p>¡Visita nuestro catálogo para agregar productos!</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
    },
    title: {
        color: '#2c3e50',
        marginBottom: '2rem',
    },
    message: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: '0 auto',
    },
};

export default Carrito;