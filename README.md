# **Aplicación de E-commerce con React Router**
Esta es una aplicación React que implementa un sistema de navegación entre tres pantallas (Inicio, Catálogo y Carrito) utilizando React Router DOM.

## **Características**
- Tres rutas principales: / (Inicio), /catalogo y /carrito
- Navegación persistente con una barra de navegación superior
- Catálogo de productos que muestra al menos 6 productos usando props
- Página de carrito con mensaje informativo
- Diseño responsive y atractivo

## **Tecnologías utilizadas**
- React
- React Router DOM
- Vite (como herramienta de construcción)
- CSS-in-JS para los estilos

## **Instalación y ejecución**
1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
```
2. Instala las dependencias:
```bash
npm install
```
3. Ejecuta la aplicación en modo desarrollo:
```bash
npm run dev
```
4. Abre tu navegador y ve a http://localhost:5173

## **Estructura del proyecto**
```text
src/
├── components/
│   ├── Navbar.jsx
│   └── Producto.jsx
├── pages/
│   ├── Home.jsx
│   ├── Catalogo.jsx
│   └── Carrito.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## **Capturas de pantalla**
1. Página de Inicio
<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/15ac9995-3e07-4250-bffb-b0afa4117b60" />

2. Página de Catálogo
<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/4cf22e1b-f711-4f4c-971c-33acb817375c" />

3. Página de Carrito
<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/471d7559-34d9-4408-8226-03052a229d2a" />

## **Funcionalidades implementadas**
- Configuración de React Router con tres rutas
- Componente de navegación con links a todas las páginas
- Página de inicio con información de la tienda
- Página de catálogo con al menos 6 productos
- Uso de props para pasar información de productos
- Página de carrito con mensaje fijo
- Diseño responsive y atractivo
