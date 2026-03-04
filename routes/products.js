const express = require('express'); // Importa la librería Express para crear un servidor web
const productServices = require('../services/servicesProducts'); // Importa el servicio de productos desde el archivo 'services/servicesProducts.js'
const router = express.Router(); // Crea una instancia de un enrutador de Express


router.get('/', async (req, res) => { 
    const products = await productServices.getAllProducts(req, res); // Llama a la función getAllProducts del servicio de productos para obtener una lista de productos
    res.json(products);
});


router.post('/', async (req, res) => {
    const createProduct = await productServices.createNewProduct(req, res); // Llama a la función createNewProduct del servicio de productos para crear un nuevo producto
    return createProduct
});

router.patch('/:id', async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res); 
    res.json(updateProduct);
});

router.delete('/:id', async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res); 
    res.json(updateProduct);
});


// Define una ruta para la URL '/products' que responde con un objeto JSON que representa un producto
router.get('/:id', async (req, res) => { 
    const getOneProduct = await productServices.getOneProduct(req, res); 
    return getOneProduct
});


module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos