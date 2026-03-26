const { Client } = require('pg');

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5433, // El puerto que definimos arriba
        user: 'admin',
        password: 'admin123',
        database: 'my_api_db'
    });

    await client.connect();
    return client;
}

module.exports = { getConnection };