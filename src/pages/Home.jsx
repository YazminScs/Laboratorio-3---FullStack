const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Bienvenido a MiTienda</h1>
            <p style={styles.description}>
                Descubre nuestros productos increíbles a precios excepcionales.
            </p>
            <div style={styles.features}>
                <div style={styles.feature}>
                    <h3>Variedad</h3>
                    <p>Más de 1000 productos diferentes</p>
                </div>
                <div style={styles.feature}>
                    <h3>Calidad</h3>
                    <p>Productos seleccionados cuidadosamente</p>
                </div>
                <div style={styles.feature}>
                    <h3>Envío Gratis</h3>
                    <p>En compras superiores a $50</p>
                </div>
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
        fontSize: '2.5rem',
    },
    description: {
        fontSize: '1.2rem',
        color: '#7f8c8d',
        maxWidth: '600px',
        margin: '0 auto 2rem',
    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    feature: {
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: '250px',
    },
};

export default Home;