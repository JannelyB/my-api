const express = require('express'); // Importa la librería Express para crear un servidor web
const apiRouter = require('./server'); // Importa el enrutador de la API desde el archivo 'server/index.js'
const cors = require('cors'); // Importa la librería CORS para habilitar el intercambio de recursos entre diferentes orígenes (Cross-Origin Resource Sharing)
const {errorLogs, handleError} = require('./middleware/error.handler'); // Importa los middlewares de manejo de errores desde el archivo 'middleware/error.handler.js'
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Cambia esto al número de puerto que desees


app.use(cors()); // Habilita CORS para todas las rutas de la aplicación
app.use(express.json());

// Middleware para analizar (parsear) cuerpos en formato JSON  
app.get('/', (req, res) => { // Define una ruta para la URL raíz
//req es el objeto de solicitud (request) que contiene información sobre la solicitud del cliente
//res es el objeto de respuesta (response) que se utiliza para enviar una respuesta al cliente
    res.send('Hola Mundo!'); // Envía una respuesta al cliente
});

/*
// Define una ruta para la URL '/help' que responde con un mensaje de ayuda
app.get('api/v1/help', (req, res) => { 
    //api/v1 sirve para organizar las rutas de la API, indicando que esta ruta pertenece a la versión 1 de la API
    res.status(200).send('Help page');  
});
*/

apiRouter(app) // Llama a la función apiRouter para configurar las rutas de la API
app.use(errorLogs); // Agrega el middleware de errorLogs para registrar los errores
app.use(handleError); // Segundo: Manejamos el error y respondemos al cliente


// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {     
    console.log(`Escuchando en el puerto ${port}`);
});
