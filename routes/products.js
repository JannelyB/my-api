const express = require('express'); // Importa la librería Express para crear un servidor web
const productServices = require('../services/servicesProducts'); // Importa el servicio de productos desde el archivo 'services/servicesProducts.js'
const router = express.Router(); // Crea una instancia de un enrutador de Express
const { validatorHandler } = require('../middleware/validator.handler');// Importa el middleware de validación desde el archivo 'middleware/validator.handler.js'
const {schemaProductCreate, updateSchemaProduct, getProductSchema} = require('../schema/schemaProduct'); // Importa los esquemas de validación para productos desde el archivo 'schema/schemaProduct.js'

router.get('/', async (req, res, next) => { 
    try {
        const products = await productServices.getAllProducts(req); // Llama a la función getAllProducts del servicio de productos para obtener una lista de productos
        res.json(products);
    } catch (error) {
        next(error);
    }
});


router.post('/' , validatorHandler(schemaProductCreate, 'body'),
    async (req, res) => {
    const createProduct = await productServices.createNewProduct(req); // Llama a la función createNewProduct del servicio de productos para crear un nuevo producto
    res.status(201).json(createProduct);
});

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'), // Valida los parámetros de la solicitud utilizando el esquema de validación para obtener un producto por su ID
    validatorHandler(updateSchemaProduct, 'body'), //   Valida el cuerpo de la solicitud utilizando el esquema de validación para la actualización de productos
    async (req, res) => {
    const updateProduct = await productServices.updateProduct(req);
    res.json(updateProduct);
});

router.delete('/:id', validatorHandler(getProductSchema, 'params'), 
    async (req, res) => {
    const deleteProduct = await productServices.deleteProduct(req); 
    res.json(deleteProduct);
});


// Define una ruta para la URL '/products' que responde con un objeto JSON que representa un producto
router.get('/:id', validatorHandler(getProductSchema, 'params'), 
    async (req, res) => {
    const getOneProduct = await productServices.getOneProduct(req); 
    res.json(getOneProduct);
});


module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos