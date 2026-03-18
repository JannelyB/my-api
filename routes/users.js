const express = require('express'); // Importa la librería Express para crear un servidor web
const servicesUsers = require('../services/servicesUsers'); // Importa el módulo de servicios para usuarios
const router = express.Router(); // Crea una instancia de un enrutador de Express

// Define una ruta para la URL '/users' que responde con un objeto JSON que contiene los parámetros 'limit' y 'offset'

router.get('/', async (req, res) => {
    const { limit, offset } = servicesUsers.getAllUsers(req); // Llama a la función 'getAllUsers' del módulo de servicios para usuarios
    if (limit && offset) {
        res.json({ limit, offset });
    } else {
        res.send('Faltan parámetros');
    }
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos