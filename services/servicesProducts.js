const { faker } = require('@faker-js/faker'); // Importa la librería Faker para generar datos falsos
const boom = require('@hapi/boom'); // Importa la librería Boom para manejar errores de manera más estructurada

const getAllProducts = (req) => {
    try { 
        const products = [];
        const { size } = req.query; 
        const limit = size || 5; 

        for(let index = 0; index < limit; index++) {
            products.push({
                // Faker ya se encarga de generar el nombre, precio e imagen aquí abajo
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.url()
            });
        }
        return products; 
    } catch (error) {
        console.error(error);
        // Es buena práctica enviar una respuesta de error al cliente
        throw new Error("Error interno del servidor");
    }
}


const createNewProduct = (req) => {
    try {
        const body = req.body; // Extrae el cuerpo de la solicitud (request body) que contiene los datos enviados por el client
        console.log(body); // Imprime el cuerpo de la solicitud en la consola
        return body;
    } catch (error) {
        console.error(error); // Imprime cualquier error que ocurra durante la creación del nuevo producto
    }
}

const updateProduct = (req) => {
    try {
        const { id } = req.params;
        const body = req.body;
        
        // Eliminamos el "if(id != 1)" porque ahora usas UUIDs
        return {
            message: 'success',
            product: body,
            id,
        };
    } catch (error) {
        // En Express, para que el middleware de error funcione, 
        // debes usar next(error) si recibes 'next' como argumento.
        console.error(error);
    }
}


const deleteProduct = (req) => {
    try {
        const {id} = req.params;
        return {
            message: 'Product deleted successfully',
            id,
        };
    } catch (error) {
        console.error(error);
    }
}

const getOneProduct = (req) => {
    try {
        const {id} = req.params; // Extrae el valor del parámetro 'id' de la URL
        // console.log(req.params.id); // Imprime el valor del parámetro 'id' en la consola
        return {
            'id': id,
            'name': 'Teclado',
            'price': 2000,
            'category': 'tecnology'
        }; // Devuelve un objeto JSON con los detalles del producto solicitado como respuesta  
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