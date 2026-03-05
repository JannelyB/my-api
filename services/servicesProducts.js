const faker = require('faker'); // Importa la librería Faker para generar datos falsos
const boom = require('@hapi/boom'); // Importa la librería Boom para manejar errores de manera más estructurada

const getAllProducts =(req, res) => {
    const price = allPrice() 
    try {        const products = []
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
        return res.json(products); // Devuelve el array de productos generados como respuesta JSON
    } catch (error) {
        console.error(error); // Imprime cualquier error que ocurra durante la generación de productos
    }
    return products; // Devuelve el array de productos generados
}


const createNewProduct = (req, res) => {
    try {
        const body = req.body; // Extrae el cuerpo de la solicitud (request body) que contiene los datos enviados por el client
        console.log(body); // Imprime el cuerpo de la solicitud en la consola
        res.json({
            ok: true,
            data: body
        });
    } catch (error) {
        console.error(error); // Imprime cualquier error que ocurra durante la creación del nuevo producto
    }
}

const updateProduct = (req, res) => {
    try {
        const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
        if(id !=1){
            throw boom.notFound('Product not found'); // Si el ID no es igual a 1, se lanza un error de tipo "Not Found" utilizando Boom
        }
        const body = req.body;
        res.json({
            message: 'success',
            product: body,
            id,
        });
    } catch (error) {
        console.error(error);
    }
}


const deleteProduct = (req, res) => {
    try {
        const {id} = req.params;
        res.json({
        message: 'Product deleted successfully',
        id,
        });
    } catch (error) {
        console.error(error);
    }
}

const getOneProduct = (req, res) => {
    try {
        const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
        // console.log(req.params.id); // Imprime el valor del parámetro 'id' en la consola
        res.json({
            'id': id,
            'name': 'Teclado',
            'price': 2000,
            'category': 'tecnology'
        }); // Devuelve un objeto JSON con los detalles del producto solicitado como respuesta  
    } catch (error) {
        console.error(error);
    }
}

module.exports = 
{
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}