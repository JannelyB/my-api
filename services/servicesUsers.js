

const getAllUsers = (req, res) => {
    const{limit, offset} = req.query; // Extrae los parámetros de consulta 'limit' y 'offset' de la URL
    // limit se utiliza para limitar el número de resultados devueltos por la API, mientras que offset se utiliza para indicar desde qué punto comenzar a devolver los resultados (útil para paginación)
    // offset se utiliza para indicar desde qué punto comenzar a devolver los resultados (útil para paginación)
    // console.log(req.query); // Imprime los parámetros de consulta en la consola
    if (limit && offset) { // Verifica si ambos parámetros 'limit' y 'offset' están presentes
        res.json({
            limit,
            offset
        //http://localhost:3000/users?limit=10&offset=100
        // Si ambos parámetros están presentes, responde con un objeto JSON que contiene los valores de 'limit' y 'offset'
        });
    } else {
        res.send('Faltan parámetros'); // Si alguno de los parámetros falta, responde con un mensaje indicando que faltan parámetros
    }
}

module.exports = {
    getAllUsers
}