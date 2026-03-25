const { getConnection } = require('../libs/postgres');

const getAllUsers = async () => {
    const client = await getConnection();
    // Ojo: Asegúrate de que tu tabla se llame 'taks' o si quisiste poner 'tasks'
    const response = await client.query('SELECT * FROM tasks'); 
    await client.end(); // ¡IMPORTANTE! Debes cerrar la conexión si usas 'Client'
    return response.rows;
}

module.exports = { getAllUsers };