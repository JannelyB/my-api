const express = require('express'); // Importa la librería Express para crear un servidor web
const productServices = require('../services/servicesProducts'); // Importa el servicio de productos desde el archivo 'services/servicesProducts.js'
const router = express.Router(); // Crea una instancia de un enrutador de Express


router.get('/', (req, res) => { 
    const products = productServices.getAllProducts(req, res); // Llama a la función getAllProducts del servicio de productos para obtener una lista de productos
    res.json(products);
});


router.post('/', (req, res) => {
    productServices.createNewProduct(req, res); // Llama a la función createNewProduct del servicio de productos para crear un nuevo producto
    
});

router.patch('/:id', (req, res) => {
    const updateProduct = productServices.updateProduct(req, res); 
    res.json(updateProduct);
});

router.delete('/:id', (req, res) => {
    productServices.deleteProduct(req, res); 
});


// Define una ruta para la URL '/products' que responde con un objeto JSON que representa un producto
router.get('/:id', (req, res) => { 
    productServices.getOneProduct(req, res); 
});


module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos