const express = require('express'); // Importa la librería Express para crear un servidor web
const servicesUsers = require('../services/servicesUsers'); // Importa el módulo de servicios para usuarios
const router = express.Router(); // Crea una instancia de un enrutador de Express

// Define una ruta para la URL '/users' que responde con un objeto JSON que contiene los parámetros 'limit' y 'offset'

router.get('/', async (req, res, next) => {
    try {
        const getUsers = await servicesUsers.getAllUsers(); 
        return res.send({ getUsers });
    } catch (error) {   
        next(error); // Ahora sí, 'next' estará definido
    }
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos