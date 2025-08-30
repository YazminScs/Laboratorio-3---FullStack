import Producto from '../components/Producto';

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: 'Laptop Gaming', precio: 1200 },
        { id: 2, nombre: 'Smartphone XL', precio: 800 },
        { id: 3, nombre: 'Auriculares Bluetooth', precio: 150 },
        { id: 4, nombre: 'Tablet Pro', precio: 450 },
        { id: 5, nombre: 'Smartwatch', precio: 250 },
        { id: 6, nombre: 'Cámara Digital', precio: 600 },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Nuestro Catálogo</h1>
            <div style={styles.productos}>
                {productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    title: {
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '2rem',
    },
    productos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
    },
};

export default Catalogo;