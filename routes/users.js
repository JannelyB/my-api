const express = require('express'); // Importa la librería Express para crear un servidor web
const servicesUsers = require('../services/servicesUsers'); // Importa el módulo de servicios para usuarios
const router = express.Router(); // Crea una instancia de un enrutador de Express

// Define una ruta para la URL '/users' que responde con un objeto JSON que contiene los parámetros 'limit' y 'offset'

router.get('/', async (req, res) => { 
    const getUsers = await servicesUsers.getAllUsers(req, res); // Llama a la función 'getAllUsers' del módulo de servicios para usuarios, pasando la solicitud (req) y la respuesta (res) como argumentos
    return getUsers; // Devuelve el resultado de la función 'getAllUsers' como respuesta a la solicitud
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos