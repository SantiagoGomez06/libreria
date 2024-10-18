# Sistema de Gestión de Libros en Línea

Este proyecto implementa un sistema de gestión de libros en línea utilizando Node.js, Express, y MongoDB. Incluye una API RESTful para la gestión de libros y un sistema de autenticación básico utilizando JWT.
## Configuración

1. Instalar dependencias:
   ```
   npm install
   ```

2. Configurar variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookmanagement
   JWT_SECRET=tu_secreto_jwt
   ```

3. Iniciar el servidor:
   ```
   npm start
   ```

## Documentación de la API

La documentación de la API está disponible a través de Swagger UI en la ruta `/api-docs` cuando el servidor está en ejecución.

## Características

- CRUD de libros (Crear, Leer, Actualizar, Eliminar)
- Autenticación de usuarios mediante JWT
- Interfaz de usuario simple para interactuar con la API

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- JWT para autenticación
- Swagger para documentación de la API

## Peticiones
- Realiza las peticiones correspondientes por medio de postman usando la ruta : http://localhost:3000/api/

## Licencia

Este proyecto está bajo la Licencia MIT.