const productRouter = require('../routes/products'); // Importa el enrutador de productos desde el archivo 'routes/products.js'
const usersRouter = require('../routes/users'); // Importa el enrutador de usuarios desde el archivo 'routes/users.js'

function apiRouter(app) {
    app.use('/products', productRouter); // Utiliza el enrutador de productos para manejar las rutas relacionadas con productos
    app.use('/users', usersRouter); // Utiliza el enrutador de usuarios para manejar las rutas relacionadas con usuarios
}

module.exports = apiRouter; // Exporta la función apiRouter para que pueda ser utilizada en otros archivos, como en 'index.js' para configurar las rutas de la API