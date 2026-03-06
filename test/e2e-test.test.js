/* const chai = require('chai'); // Importa la librería Chai para realizar pruebas de integración
const chaiHttp = require('chai-http'); // Importa el plugin chai-http para realizar solicitudes HTTP en las pruebas
chai.use(chaiHttp);; // Agrega el plugin chai-http a Chai para realizar solicitudes HTTP en las pruebas

const app = require('../index').app; // Importa la aplicación Express desde el archivo 'index.js' para realizar pruebas de integración

describe('Suit de pruebas e2e para el curso', () => {
    it('Esperamos un Hello World!', (done) => {
        chai.request('http://localhost:3000') // Realiza una solicitud HTTP utilizando Chai
            .get('/') // Especifica que la solicitud es de tipo GET a la ruta raíz '/'
            .end((err, res) => { // Maneja la respuesta de la solicitud
                console.log('A'); 
                chai.assert.equal(res.text, 'Hello World!'); // Realiza una aserción para verificar que el texto de la respuesta es igual a 'Hello World!'
                done(); // Indica que la prueba ha terminado
            });
    });
});

*/
