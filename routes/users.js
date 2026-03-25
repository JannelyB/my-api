const express = require('express'); // Importa la librería Express para crear un servidor web
const servicesUsers = require('../services/servicesUsers'); // Importa el módulo de servicios para usuarios
const router = express.Router(); // Crea una instancia de un enrutador de Express

// Define una ruta para la URL '/users' que responde con un objeto JSON que contiene los parámetros 'limit' y 'offset'

router.get('/', async (req, res) => {
    try {
        const getUsers = await servicesUsers.getAllUsers(req, res); // Llama a la función getAllUsers del módulo de servicios para usuarios
        return res.send({getUsers}); // Envía la respuesta al cliente con los datos obtenidos de la función getAllUsers
    } catch (error) {   
        next(error); // Si ocurre un error, pasa el error al siguiente middleware de manejo de errores
    }
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos