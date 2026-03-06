const Joi = require('joi'); // Importa la librería Joi para la validación de datos

const id = Joi.string().uuid(); // Define una regla de validación para el campo 'id', que debe ser un número entero y un UUID válido
const name = Joi.string().alphanum().min(3).max(10); // Define una regla de validación para el campo 'name', que debe ser una cadena de texto con una longitud mínima de 3 caracteres y máxima de 30 caracteres, y es obligatorio
const price = Joi.number().integer().min(10); // Define una regla de validación para el campo 'price', que debe ser un número entero y mayor o igual a 10

const schemaProductCreate = Joi.object({ // Crea un esquema de validación para la creación de un producto, que incluye los campos 'name' y 'price' con las reglas definidas anteriormente
    name: name.required(), // El campo 'name' es obligatorio en la creación de un producto, por lo que se marca como requerido
    price: price.required(), // El campo 'price' es obligatorio en la creación de un producto, por lo que se marca como requerido
});

const updateSchemaProduct = Joi.object({ // Crea un esquema de validación para la actualización de un producto
    name: name, // El campo 'name' es opcional en la actualización, por lo que no se marca como requerido
    price: price, // El campo 'price' es opcional en la actualización, por lo que no se marca como requerido
});

const getProductSchema = Joi.object({ // Crea un esquema de validación para obtener un producto por su ID
    id: id.required(), // El campo 'id' es obligatorio para obtener un producto, por lo que se marca como requerido
});

module.exports = {
    schemaProductCreate,
    updateSchemaProduct,
    getProductSchema
}   