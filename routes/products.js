const express = require('express'); // Importa la librería Express para crear un servidor web
const faker = require('faker'); // Importa la librería Faker para generar datos falsos
const router = express.Router(); // Crea una instancia de un enrutador de Express


router.get('/', (req, res) => { 
    const products = []
    const {size} = req.query; // Extrae el parámetro de consulta 'size' de la URL
    const limit = size || 5; // Si 'size' no está presente, se establece un valor predeterminado de 10
    for(let index = 0; index < limit; index++) {
        // Genera un producto falso utilizando Faker y lo agrega al array 'products'
        products.push({
            name:faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
            })
    }
    res.json(products);
});


router.post('/', (req, res) => {
    const body = req.body; // Extrae el cuerpo de la solicitud (request body) que contiene los datos enviados por el cliente
    console.log(body); // Imprime el cuerpo de la solicitud en la consola
    res.json({
        ok: true,
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
    const body = req.body;
    res.json({
        message: 'success',
        product: body,
        id,
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
    res.json({
        message: 'DELETED',
        id,
    });
});


// Define una ruta para la URL '/products' que responde con un objeto JSON que representa un producto
router.get('/:id', (req, res) => { 
        const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
    // console.log(req.params.id); // Imprime el valor del parámetro 'id' en la consola
    res.json([
        {
            id: 1,
            name: 'Teclado',
            price: 100,
            category: 'tecnology'
        },
        {
            id: 2,
            name: 'Mouse',
            price: 50,
            category: 'tecnology'
        }
    ])
});


module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos