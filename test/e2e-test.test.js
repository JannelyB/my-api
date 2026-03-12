const chai = require('chai'); // Importa la librería Chai para realizar pruebas de integración
const chaiHttp = require('chai-http'); // Importa el plugin chai-http para realizar solicitudes HTTP en las pruebas
const expect = require ('chai').expect; // Importa la función 'expect' de Chai para realizar aserciones en las pruebas

chai.use(chaiHttp);; // Agrega el plugin chai-http a Chai para realizar solicitudes HTTP en las pruebas

const url = 'http://localhost:3000'; // Define la URL base para las solicitudes HTTP en las pruebas

describe('Inserte el nombre y el precio', () => { // Define una suite de pruebas para insertar un producto con nombre y precio
    it('Esperamos un name y un price', (done) => { // Define una prueba que espera recibir un nombre y un precio al insertar un producto
        chai.request(url) // Realiza una solicitud HTTP utilizando Chai
            .post('/api/v1/products') // Especifica que la solicitud es de tipo POST a la ruta '/products'
            .send({ name: 'Mouse', price: 100 }) // Envía un objeto JSON con el nombre y el precio del producto en el cuerpo de la solicitud
            .end((err, res) => { // Maneja la respuesta de la solicitud
                console.log('res.body', res.body); // Imprime el cuerpo de la respuesta en la consola para verificar su contenido
                expect(res).to.have.status(200); // Realiza una aserción para verificar que el código de estado de la respuesta es 200 (OK)
                done(); // Indica que la prueba ha terminado
            });
    });
});

            







/* 
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
