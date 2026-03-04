const faker = require('faker'); // Importa la librería Faker para generar datos falsos


const getAllProducts =(req, res) => {
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
    res.json(products); // Envía el array de productos como respuesta en formato JSON
}

const createNewProduct = (req, res) => {
    const body = req.body; // Extrae el cuerpo de la solicitud (request body) que contiene los datos enviados por el client
    console.log(body); // Imprime el cuerpo de la solicitud en la consola
    res.json({
        ok: true,
        data: body
    });
}

const updateProduct = (req, res) => {
    const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
    const body = req.body;
    res.json({
        message: 'success',
        product: body,
        id,
    });
}


const deleteProduct = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'Product deleted successfully',
        id,
    });
}

const getOneProduct = (req, res) => {
    const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
    // console.log(req.params.id); // Imprime el valor del parámetro 'id' en la consola
    res.json({
            'id': id,
            'name': 'Teclado',
            'price': 2000,
            'category': 'tecnology'
    })
}

module.exports = 
{
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}