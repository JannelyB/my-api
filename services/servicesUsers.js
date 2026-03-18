

const getAllUsers = (req) => {
    const{limit, offset} = req.query; // Extrae los parámetros de consulta 'limit' y 'offset' de la URL
    return { limit, offset };
}

module.exports = {
    getAllUsers
}