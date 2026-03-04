

function errorLogs(err, req, res, next) { // El error logs se ejecuta antes que el handleError, por lo que se encarga de registrar el error antes de enviarlo al cliente
    console.log('Error Logs: '); // Aquí puedes agregar lógica para registrar el error en un archivo o servicio de monitoreo
    console.log(err); // Luego, se llama a next() para pasar el error al siguiente middleware, que en este caso sería el handleError
    next(err);
}

function handleError(err, req, res, next) {
    console.log('Handle Error: '); // Aquí puedes agregar lógica para manejar el error de manera personalizada, como enviar un correo electrónico al administrador o mostrar una página de error personalizada
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {
    errorLogs,
    handleError
};



